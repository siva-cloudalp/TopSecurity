<input data-type="search-input" class="itemssearcher-input typeahead"
	placeholder="{{placeholderLabel}}"
	type="search" autocomplete="off"
	{{#if showId}} id="{{id}}" {{/if}} {{#if showName}} name="{{name}}" {{/if}}
	maxlength="{{maxLength}}"/>




{{!----
Use the following context variables when customizing this template: 
	
	placeholderLabel (String)
	maxLength (Number)
	showId (Boolean)
	showName (Boolean)
	id (String)
	name (String)

// auto hide placeholders
	https://stackoverflow.com/questions/9707021/how-do-i-auto-hide-placeholder-text-upon-focus-using-css-or-jquery

----}}
