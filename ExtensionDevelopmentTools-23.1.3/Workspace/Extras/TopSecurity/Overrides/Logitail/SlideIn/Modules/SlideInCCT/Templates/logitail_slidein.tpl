<label class="e-overlay" name="ltsca-slidein-overlay"></label>

<label class="m-kcc-menu__button" name="ltsca-slidein-icon">
	{{{icon}}}
</label>

<div class="m-kcc-menu" name="ltsca-slidein-content">
	<div name="ltsca-slidein-close">
		<img src="{{closeIcon}}" class="m-kcc-menu_close">
	</div>
	<div>
		<!-- Top Menu -->
		{{#if topMenu}}
		<header class="headerslidein">
			<a href="{{topMenuLink}}" target="{{topMenuTarget}}">
				<div data-type="link-content">
					{{{topMenu}}}
				</div>
			</a>
		</header>
		{{/if}}
		<div class="supportblock">
			<!-- Support Block 1 -->

			{{#if sb1Html}}
			<section class="sb1">
				<a href="{{sb1Link}}" target="{{sb1Target}}">
					<div data-type="link-content">
						{{{sb1Html}}}
					</div>
				</a>
			</section>
			{{/if}}
			<!-- Support Block 2 -->
			{{#if sb2Html}}
			<section class="sb2">
				<a href="{{sb2Link}}" target="{{sb2Target}}">
					<div data-type="link-content">
						{{{sb2Html}}}
					</div>
				</a>
			</section>
			{{/if}}
			<!-- Support Block 3 -->
			{{#if sb3Html}}
			<section class="sb3">
				<a href="{{sb3Link}}" target="{{sb3Target}}">
					<div data-type="link-content">
						{{{sb3Html}}}
					</div>
				</a>
			</section>
			{{/if}}
			<!-- Support Block 4 -->
			{{#if sb4Html}}
			<section class="sb4">
				<a href="{{sb4Link}}" target="{{sb4Target}}">
					<div data-type="link-content">
						{{{sb4Html}}}
					</div>
				</a>
			</section>
			{{/if}}
			<!-- Support Block 5 -->
			{{#if sb5Html}}
			<section class="sb5">
				<a href="{{sb5Link}}" target="{{sb5Target}}">
					<div data-type="link-content">
						{{{sb5Html}}}
					</div>
				</a>
			</section>
		</div>
		{{/if}}
		<section class="supportfaq">
			{{#if faqTitle}}
			<h3>{{faqTitle}}</h3>
			{{/if}}
			<!-- Faq 1 -->

			{{#if faq1}}

			<a href="{{faq1Link}}" target="{{faq1Target}}"></a>
			<div data-type="link-content">
				<p>{{faq1}}</p>
			</div>
			{{/if}}
			<!-- Faq 2 -->
			{{#if faq2}}
			<a href="{{faq2Link}}" target="{{faq2Target}}"></a>
			<div data-type="link-content">
				<p>{{faq2}}</p>
			</div>
			{{/if}}
			<!-- Faq 3 -->
			{{#if faq3}}
			<a href="{{faq3Link}}" target="{{faq3Target}}"></a>
			<div data-type="link-content">
				<p>{{faq3}}</p>
			</div>
			{{/if}}
			<!-- Faq 4 -->
			{{#if faq4}}
			<a href="{{faq4Link}}" target="{{faq4Target}}"></a>
			<div data-type="link-content">
				<p>{{faq4}}</p>
			</div>
			{{/if}}
			<!-- Faq 5 -->
			{{#if faq5}}
			<a href="{{faq5Link}}" target="{{faq5Target}}"></a>
			<div data-type="link-content">
				<p>{{faq5}}</p>
			</div>
			{{/if}}
		</section>
	</div>
</div>


<script>
$(document).ready(function(){
  $("section.sb1 > a").click(function(){ //section.sb2 > a > div > h5
    $(".m-kcc-menu").removeClass("open");
	
	$(".e-overlay").attr("style", "display: none");
  });
	$("section.sb1").click(function(){
		LC_API.open_chat_window();
	});
	
});
</script>