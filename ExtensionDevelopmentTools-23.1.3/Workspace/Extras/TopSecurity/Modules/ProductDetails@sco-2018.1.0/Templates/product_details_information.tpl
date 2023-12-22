{{!-- Edited for Threads Theme --}}

<div class="product-details-information-content">
	{{#if showInformation}}
	{{#each details}}
	{{!-- Mobile buttons --}}
	<button class="product-details-information-pusher" data-target="product-details-information-{{ @index }}"
		data-type="sc-pusher">
		{{ name }} <i></i>
		<p class="product-details-information-hint"> {{{trimHtml content 150}}} </p>
	</button>
	{{/each}}

	<div class="product-details-information-content-container">

		<div id="banner-content-top" class="content-banner banner-content-top"></div>

		<div role="tabpanel">
			{{!-- When more than one detail is shown, these are the tab headers  --}}
			<ul class="product-details-information-content-tabs" role="tablist">

				{{#each details}}
				<li class="product-details-information-tab-title {{#if @first}} active {{/if}}" role="presentation">
					<a href="#" data-action="selected-tab" data-id="{{@index}}"
						data-target="#product-details-information-tab-{{@index}}" data-toggle="tab">{{name}}</a>
				</li>
				{{/each}}
			</ul>
			{{!-- Tab Contents --}}
			<div class="product-details-information-tab-content" data-type="information-content"
				data-action="tab-content">
				
						{{#each details}}							
						<div role="tabpanel"
							class="product-details-information-tab-content-panel {{#if @first}}active{{/if}}"
							id="product-details-information-tab-{{@index}}" 
							data-action="pushable" data-id="product-details-information-{{ @index }}">
							<!--{{#if ../showHeader}}<h2 class="product-details-information-tab-content-panel-title">{{name}}</h2>{{/if}}-->
							<h2 class="product-details-information-tab-content-panel-title">{{name}}</h2>
							<div class="collapse multi-collapse" id="collapseSection-{{@index}}" aria-expanded="start">
								<div class="well">										
									<div id="product-details-information-tab-content-container-{{@index}}"
									class="product-details-information-tab-content-container"
									data-type="information-content-text" itemprop="{{itemprop}}">
									{{{content}}}
									</div>
								</div>{{!-- end class "well"--}}
							</div>{{!-- end clas "collapse"--}}
								
							{{!-- end --}}
						</div>
						<div class="shadowContent">
						</div>
						<hr class="showMoreline">
						<button type="button" id="buttonCollapse-{{@index}}" class="btn btn-default btn-s collapsed" data-toggle="collapse" data-target="#collapseSection-{{@index}}" aria-expanded="false" aria-controls="collapseExample">
							
						</button>							
						{{/each}}

				{{!-- The following links do not work when the design has changed the layout to remove the tabs --}}
				{{!--<div class="product-details-information-tab-action" data-type="information-content-text-actions">
						<a href="#" class="product-details-information-tab-action-more" data-action="show-more">{{translate 'See More'}}</a>
						<a href="#" class="product-details-information-tab-action-less" data-action="show-more">{{translate 'See Less'}}</a>
					</div>--}}
			</div>
		</div>
		<div id="banner-content-bottom" class="content-banner banner-content-bottom"></div>
	</div>
	{{/if}}

</div>

<script>
$(function() {

   //$( ".well" ).scrollHeight;
   // $('.well').css("background", "red");

  // if($('.well').prop('scrollHeight') > 400){
//	   $('.well').css("background", "red");
  // }

    $('.well').each(function(i){
        var sHeight = $(this).prop('scrollHeight');
        if (sHeight < 500 || sHeight === 0){
			// alert("scroll height of well#" + i + " is smaller than 500!\n Height: " + sHeight);
			$('.showMoreline:eq('+i+')').css("display","none");
			$('#buttonCollapse-'+i).css("display","none");
			$('[data-view="Product.Information"] div#collapseSection-'+i).css("max-height","none");
		}
            

    });

  // var myValue = // $('.well')[1].prop('scrollHeight');
  // $('.well')[1].scrollHeight;
  // console.log(myValue);
});
</script>

{{!----
Use the following context variables when customizing this template:

	showInformation (Boolean)
	showHeader (Boolean)
	details (Array)

----}}