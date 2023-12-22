{{#if showHosts}}
<div class="global-views-host-selector">
	<!--span class="global-views-host-selector-addon">
		<i class="global-views-host-selector-globe-icon"></i>
	</span-->



<ul class="header-menu-level3 global-views-host-selector-select"  value="{{host}}" >

		{{#each availableHosts}}		
			{{#if hasLanguages}}
					{{#each languages}}
					<li value="{{host}}"  {{#if isSelected}}selected{{/if}}>
					  <!--a class="header-menu-level3-anchor ddn" href="{{host}}" data-hashtag="" onclick="return false;" data-toggle="host-selector" value="{{host}}" presently="{{#if isSelected}}selected{{/if}}" data-touchpoint="home">{{displayName}}</a-->					
					  <button class="header-menu-level3-anchor ddn" data-toggle="host-selector" value="{{host}}" presently="{{#if isSelected}}selected{{/if}}">{{displayName}}</button>
					</li>
					{{/each}}
			{{/if}}			
		{{/each}}
</ul>


	<!--select data-toggle="host-selector" class="global-views-host-selector-select"-->
		{{#each availableHosts}}
		
			{{#if hasLanguages}}
				<!--optgroup label="{{title}}"-->
				<!--optgroup label=""-->
					{{#each languages}}
						<!--option value="{{host}}" {{#if isSelected}}selected{{/if}}>
							{{displayName}}
						</option-->
					{{/each}}
				<!--/optgroup-->
			{{/if}}
			
		{{/each}}
	<!--/select-->
</div>
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
