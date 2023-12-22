// module ProductComparison
define('SC.ProductComparison.1.0.0.ProductComparison', [
    'Backbone',
    'SC.Configuration',

    'ProductComparison.Router',
    'Facets.ItemCell.View',
    'ProductComparison.View',
    'Facets.Browse.View',
    'ProductComparison.Facets.Browse.View.Extended',
    'underscore',
    'Utils'
], function ProductComparison(
    Backbone,
    Configuration,

    Router,

    FacetsItemCellView,
    ProductComparisonView,
    FacetsBrowseView,
    ProductComparisonFacetsBrowseViewExtended
) {
    'use strict';

    var ProductComparisonConfig = Configuration.get('productComparison');
    if (ProductComparisonConfig && ProductComparisonConfig.enabled) {
        return {
            mountToApp: function mountToApp(application) {
                var plp = application.getComponent('PLP');
                var layout = application.getLayout();
                application.getLayout().on('afterAppendView', function applicationGetLayout(view) {
                    if (!(view instanceof FacetsBrowseView)) {
                        view.$el.find('.facets-item-cell-addtocompare').remove();
                    }
                });

                layout.goToProductComparison = function goToProductComparison() {
                    Backbone.history.navigate('productcomparison', { trigger: true });
                };

                plp.addChildViews(
                    plp.PLP_VIEW, {
                        'GlobalViews.Pagination': {
                            'AddedForComparison': {
                                childViewIndex: 1,
                                childViewConstructor: function childViewConstructor() {
                                    return new ProductComparisonFacetsBrowseViewExtended({
                                        application: application,
                                        plp: plp
                                    });
                                }
                            }
                        }
                    }
                );

                plp.addChildViews(
                    plp.PLP_VIEW, {
                        'ItemDetails.Options': {
                            'Product.Comparison.View': {
                                childViewIndex: 5,
                                childViewConstructor: function childViewConstructor() {
                                    return new ProductComparisonView({
                                        application: application,
                                        plp: plp
                                    });
                                }
                            }
                        }
                    }
                );

                return new Router(application);
            }
        };
    }
});
