{{!-- Edited for Threads Theme --}}

<div class="facets-category-cell">

{{!-- different template versions on desktop and mobile:
    1) no links on mobile based layout: replace {url} with #
 --}}

<div class="facets-category-cell-desktop"> 
    {{#if hasImage}}
        <div class="facets-category-cell-thumbnail">
            <a href="{{url}}" class="facets-category-cell-anchor">
                <div class="facets-category-cell-content-container ">
                    <div class="facets-category-cell-image-container ratio-4-3" imgurl="{{resizeImage thumbnail.url }}" style="background-image: url('{{resizeImage image 'categorythumb'}}');"></div>
                    <div class="facets-category-cell-title-container">
                        
                    </div>
                </div>
                <h4 class="facets-category-cell-title">{{name}}</h4>
            </a>
        </div>
        <div class="facets-category-cell-title"></div>
    {{else}}
        <div class="facets-category-cell-thumbnail">
            <a href="{{url}}" class="facets-category-cell-anchor">
                <div class="facets-category-cell-content-container">
                    <div class="facets-category-cell-image-container ratio-4-3" imgurl="{{resizeImage thumbnail.url 'thumbnail'}}" style="background-image: url('{{resizeImage thumbnail.url 'categorythumb'}}');"></div> 
                </div>
                <h4 class="facets-category-cell-title">{{name}}</h4>
            </a>
        </div>          
    {{/if}}
    {{#if isSummaryView}}
        {{#each children.categories}}
            <div class="facets-category-cell-title">
                <a href="{{fullurl}}" class="facets-category-cell-anchor">
                    {{name}}
                </a>
            </div>
        {{/each}}
    {{/if}}
</div>


    <div class="facets-category-cell-mobile">
        <div class="container-fluid" id="footer-secondary-container">
            <div class="container">
                <div class="row">           
                    <div class="col-md-3 widget  {{#if isSummaryView}}withsummary{{/if}}">
                        <h4 class="facets-category-cell-title">
                            <a href="{{url}}?page=1" class="facets-category-cell-anchor">
                                {{name}}
                            </a>
                        </h4>
                        {{#if isSummaryView}}
                        <article class="widget_content">
                            <ul> 
                                {{#each children.categories}}
                                    <li>
                                        <div class="facets-category-cell-title">
                                            <a href="{{fullurl}}" class="facets-category-cell-anchor">
                                                {{name}}
                                            </a>
                                        </div>
                                    </li>                                    
                                {{/each}}                            
                            </ul>
                        </article>
                        {{/if}}
                    </div>          
                </div>
            </div>
        </div>
    </div>

</div>


<!--div class="facets-category-cell-mobile">
<div class="container-fluid" id="footer-secondary-container">
    <div class="container">
        <div class="row">           
            <div class="col-md-3 widget">
                <h4 class="facets-category-cell-title">{{name}}</h4>
                <article class="widget_content">
                    <ul>
                        {{#if isSummaryView}}
                                {{#each children.categories}}
                                <li>
                                    <div class="facets-category-cell-title">
                                        <a href="{{fullurl}}" class="facets-category-cell-anchor">
                                            {{name}}
                                        </a>
                                    </div>
                                </li>                                    
                                {{/each}}
                            {{/if}}
                    </ul>
                </article>
            </div>          
        </div>
    </div>
</div>
</div-->


{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.
----}}
