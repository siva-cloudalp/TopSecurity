{{!-- Edited for Threads Theme --}}

<div id="site-logo" class="content-banner ishutest"></div>

<a class="header-logo" href="{{headerLinkHref}}" data-touchpoint="{{headerLinkTouchPoint}}"
	data-hashtag="{{headerLinkHashtag}}" title="{{headerLinkTitle}}">

	{{#if logoUrl}}
		<img class="header-logo-image" src="{{getThemeAssetsPathWithDefault logoUrl 'img/SC_Logo.png'}}" alt="{{siteName}}">
		{{!-- TO FIX --}}
	{{else}}
		<span class="header-logo-sitename">
			{{siteName}}
		</span>
	{{/if}}
</a>




{{!----
Use the following context variables when customizing this template:

	logoUrl (String)
	headerLinkHref (String)
	headerLinkTouchPoint (String)
	headerLinkHashtag (String)
	headerLinkTitle (String)

----}}
