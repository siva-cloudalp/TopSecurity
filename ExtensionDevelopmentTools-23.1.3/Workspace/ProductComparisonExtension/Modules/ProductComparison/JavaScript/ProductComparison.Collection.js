/*
    © 2016 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
// @module ProductComparison
define('ProductComparison.Collection', [
    'SC.Configuration',
    'Profile.Model',
    'Backbone',
    'Backbone.CachedCollection',
    'Item.Collection',
    'Session',
    'underscore',
    'Utils'
], function ProductComparisonCollection(
    Configuration,
    ProfileModel,
    Backbone,
    BackboneCachedCollection,
    ItemCollection,
    Session,
    _
) {
    'use strict';

    return ItemCollection.extend({
        url: function Url() {
            var productIDs = [];
            var idString = '';
            var url = '';
            var tmpVal;

            // Retreieving from URL queryStr from options
            var queryStrParams = this.options;
            if (queryStrParams) {
                _.each(queryStrParams, function eachQueryParams(value, key) {
                    tmpVal = parseInt(value, 10);
                    if (key < 4) {
                        productIDs.push(tmpVal);
                        idString += 'id=' + tmpVal + '&';
                    }
                });
                url = '/api/items?' + idString + 'fieldset=productcomparison';
            }
            return url;
        },

        // @method initialize
        initialize: function initialize(options) {
            this.options = options;
        },

        // @method getModuleConfig
        getModuleConfig: function getModuleConfig() {
            var config = Configuration.get('productComparison');
            return config;
        },

        getUrlLogin: function getUrlLogin() {
            var url = Session.get('touchpoints.login') + '&origin=' + (Configuration.get('currentTouchpoint') || 'home') + '&origin_hash=';

            return url + encodeURIComponent(Backbone.history.fragment);
        },

        // @method getMappedValuesToProperties
        getMappedValuesToProperties: function getMappedValuesToProperties() {
            var self = this;
            var productValues = [];
            var productGroups = [];
            var itemValue;
            var test = this.getModuleConfig().itemProperties;
            var tmpItemProperties = _.clone(test);
            var pluckMatrixChildItems;
            var maxPriceValue;
            var minPriceValue;
            var loginText = '';
            var seePriceText = '';

            tmpItemProperties = _.sortBy(tmpItemProperties, 'order');

            _.map(tmpItemProperties, function tmpItemPropertiesMapping(itemProperty, key) {
                productValues = [];

                self.each(function eachProperty(item) { // eslint-disable-line
                    if (itemProperty && itemProperty.fieldid) {
                        if (itemProperty.type === 'Actions') {
                            itemValue = {};

                            if (typeof itemProperty.fieldid === 'string') {
                                itemProperty.fieldid = itemProperty.fieldid.replace(/\s/g, '');
                                itemProperty.fieldid = itemProperty.fieldid.split(',');
                            }

                            _.each(itemProperty.fieldid, function eachItemPropertyId(itemPropertyID) {
                                itemValue[itemPropertyID] = item.get(itemPropertyID);
                            });

                            itemProperty.isTypeControlActions = true;
                        } else {
                            if (itemProperty.fieldid === 'pricelevel5_formatted') { // eslint-disable-line no-lonely-if
                                if (!ProfileModel.getInstance().hidePrices()) {
                                    itemProperty.isPrice = true;

                                    if (item.get('custitem_item_customersegments') !== undefined) {
                                        productGroups.push(
                                            item.get('custitem_item_customersegments')
                                                .split(', ')
                                                .toString()
                                                .replace(new RegExp(' ', 'g'), '-')
                                                .replace(',', ' ') || '');
                                    }

                                    if (item.get('matrixchilditems_detail')) {
                                        pluckMatrixChildItems = _.pluck(item.get('matrixchilditems_detail'), 'onlinecustomerprice_detail');
                                        if (pluckMatrixChildItems) {
                                            maxPriceValue = _.max(pluckMatrixChildItems, function getMaxPriceValue(matrixChild) {
                                                return matrixChild.onlinecustomerprice;
                                            });

                                            minPriceValue = _.min(pluckMatrixChildItems, function getMinPriceValue(matrixChild) {
                                                return matrixChild.onlinecustomerprice;
                                            });

                                            if (maxPriceValue.onlinecustomerprice_formatted !== minPriceValue.onlinecustomerprice_formatted) {
                                                itemValue = (maxPriceValue.onlinecustomerprice && minPriceValue.onlinecustomerprice) ?
                                                    minPriceValue.onlinecustomerprice_formatted + ' ' +
                                                        _.translate('to') + ' ' +
                                                        maxPriceValue.onlinecustomerprice_formatted :
                                                    item.get(itemProperty.fieldid);
                                            } else {
                                                itemValue = (item.get(itemProperty.fieldid) ? item.get(itemProperty.fieldid) : '');
                                            }
                                        } else {
                                            itemValue = (item.get(itemProperty.fieldid) ? item.get(itemProperty.fieldid) : '');
                                        }
                                    } else {
                                        itemValue = (item.get(itemProperty.fieldid) ? item.get(itemProperty.fieldid) : '');
                                    }
                                } else {
                                    loginText = _.translate('Log in');
                                    seePriceText = _.translate('to see price');
                                    itemValue = '<a data-touchpoint="login" data-hashtag="login-register" href="#">' + loginText + '</a> ' + seePriceText;
                                }
                            } else {
                                itemValue = (item.get(itemProperty.fieldid) ? item.get(itemProperty.fieldid) : '');
                            }
                        }

                        if (itemProperty.type === 'Image') {
                            itemProperty.isTypeImage = true;
                        }

                        if (itemProperty.fieldid === '_images') {
                            itemValue = _.first(itemValue);
                        }

                        productValues.push(itemValue);
                    }
                });

                // if the product values is not empty, add it in the item property else remove
                if (_.compact(productValues).length !== 0) {
                    itemProperty.productValues = productValues;
                    itemProperty.productGroups = productGroups;
                } else {
                    delete tmpItemProperties[key];
                }
            });

            return _.compact(tmpItemProperties);
        }
    });
});
