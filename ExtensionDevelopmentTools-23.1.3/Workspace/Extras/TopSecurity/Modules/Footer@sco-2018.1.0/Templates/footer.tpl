{{!-- Edited for Threads Theme --}}

<div data-view="Global.BackToTop"></div>
<div class="footer-content">

    <div id="banner-footer" class="content-banner banner-footer" data-cms-area="global_banner_footer"
        data-cms-area-filters="global"></div>

    <section class="footer-content-upper-section-container">
        <!--div class="footer-content-upper-section">
            {{#if extraFooterViewContext.title}}
                <h5 class="footer-content-upper-section-title">{{extraFooterViewContext.title}}</h5>
            {{/if}}
            <div data-view="FooterContent" class="footer-content-newsletter-container"></div>
        </div-->
        {{#if footerUspEnabled}}
        <div class="footer-content-middle-section">
            <div class="footer-columns quality-labels">
                <div class="footer-column-ql-links">
                    {{!-- no image here but a bigger text --}}
                    <span class="ql-title">
                        {{!-- {{translate 'Dé expert in beveiliging'}} --}}
                        {{footerUspTitle}}
                    </span>
                </div>
                <div class="footer-column-ql-links">
                    <img src="{{ getThemeAssetsPath footerUspIcon1}}"
                    {{!-- http://topsecurity.scadev.logitail.com/sca-dev-2019-1/extensions/TS/TopSecurity/1.1.19/img/headset.png --}}
                        alt="" class="ql-img">
                    <span class="ql-text">
                        {{!-- Uitgebreide ondersteuning --}}
                        {{footerUspLabel1}}
                    </span>
                </div>
                <div class="footer-column-ql-links">
                    <img src="{{ getThemeAssetsPath footerUspIcon2}}"
                    {{!-- http://topsecurity.scadev.logitail.com/sca-dev-2019-1/extensions/TS/TopSecurity/1.1.19/img/delivery-fast.png --}}
                        alt="" class="ql-img">
                    <span class="ql-text">
                        {{!-- Snelle leveringen --}}
                        {{footerUspLabel2}}
                    </span>
                </div>
                <div class="footer-column-ql-links">
                    <img src="{{ getThemeAssetsPath footerUspIcon3}}"
                    {{!-- http://topsecurity.scadev.logitail.com/sca-dev-2019-1/extensions/TS/TopSecurity/1.1.19/img/box-3d-50.png --}}
                        alt="" class="ql-img">
                    <span class="ql-text">
                        {{!-- Gratis verzending vanaf €50 --}}
                        {{footerUspLabel3}}
                    </span>
                </div>
            </div>{{!-- end column links uppersection --}}

        </div>
        {{/if}} 
        {{!-- end footerUspEnabled --}}
    </section>

    <section class="footer-content-middle-section-container">
        <div class="footer-content-middle-section">
            {{#if extraFooterViewContext.socialMediaLinks}}
            <div class="footer-content-social">
                <div class="footer-logo-view-container">
                   		<svg version="1.1" id="logofooter" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 2345.7 925.6" xml:space="preserve"><style>.st1{opacity:.6}.st1,.st2{fill:#fff}</style><path d="M525.4 30.3L111.8 269.1c-149.1 86.1-149.1 301.4 0 387.5l413.5 238.8c149.1 86.1 335.5-21.5 335.5-193.7V224c.1-172.2-186.3-279.8-335.4-193.7zm179.1 488.3c-2.2 5.2-4.5 10.5-7 15.7-2.5 5.3-5.1 10.5-8 15.8-4.2 7.9-8.8 15.9-13.8 23.8s-10.4 15.8-16.3 23.6c-5.9 7.8-12.2 15.6-18.9 23.2C606.6 658.8 561 694 499.4 721c-45.2-19.8-81.8-44-111.4-70.5-2.7-2.4-5.3-4.8-7.9-7.3-15.5-14.7-29-30-40.7-45.7-2-2.6-3.9-5.2-5.7-7.8-3.7-5.2-7.2-10.5-10.6-15.8-16.7-26.4-28.9-53.1-37.7-78.6-1.8-5.1-3.4-10.1-4.9-15.1-7.6-24.9-12-48.3-14.6-68.5-.8-6.1-1.4-11.8-1.9-17.3-2.8-32.7-.7-53.7-.7-53.7l236.1-136.4h-.1.1-.1l236.1 136.4c.1.2 8.5 84.1-30.9 177.9z" opacity=".2" fill="#fff"/><path class="st1" d="M886.9 269.1L473.4 30.3C324.3-55.8 137.8 51.8 137.8 224v477.5c0 172.2 186.4 279.8 335.6 193.7l413.5-238.8c149.2-86 149.2-301.2 0-387.3zm-387.5 452C236.7 606 263.3 340.9 263.3 340.9l236.1-136.4h-.1.1-.1l236.1 136.4c.1 0 26.7 265.1-236 380.2z"/><path class="st2" d="M608.5 367.6H390.2v57.1h80.6v161.2h57.1V424.7h80.6z"/><path class="st2" d="M499.4 45.3L137.8 254.1v417.5l361.5 208.7 361.5-208.7V254.1L499.4 45.3zm205.1 473.3c-2.2 5.2-4.5 10.5-7 15.7-2.5 5.3-5.1 10.5-8 15.8-4.2 7.9-8.8 15.9-13.8 23.8s-10.4 15.8-16.3 23.6c-5.9 7.8-12.2 15.6-18.9 23.2C606.6 658.8 561 694 499.4 721c-45.2-19.8-81.8-44-111.4-70.5-2.7-2.4-5.3-4.8-7.9-7.3-15.5-14.7-29-30-40.7-45.7-2-2.6-3.9-5.2-5.7-7.8-3.7-5.2-7.2-10.5-10.6-15.8-16.7-26.4-28.9-53.1-37.7-78.6-1.8-5.1-3.4-10.1-4.9-15.1-7.6-24.9-12-48.3-14.6-68.5-.8-6.1-1.4-11.8-1.9-17.3-2.8-32.7-.7-53.7-.7-53.7l236.1-136.4h-.1.1-.1l236.1 136.4c.1.2 8.5 84.1-30.9 177.9z"/><g><path class="st2" d="M1114.5 418.2v-27.4h108v27.4h-38.6v115.7h-30.7V418.2h-38.7zM1254.5 410.8c14.1-14.3 31.4-21.6 51.5-21.6 20.4 0 37.6 7.3 51.5 21.6 14.1 14.3 21.2 31.6 21.2 51.9 0 20.1-7.1 37.6-21.2 51.9-14.1 14.3-31.4 21.4-51.5 21.4s-37.4-7.1-51.5-21.4c-13.9-14.3-21-31.8-21-51.9 0-20.4 7-37.6 21-51.9zm81.4 21.1c-8.1-8.5-18.1-12.7-29.9-12.7-11.8 0-21.8 4.2-29.9 12.7-8.1 8.5-12.3 18.7-12.3 30.7s4.2 22.2 12.3 30.7c8.1 8.3 18.1 12.5 29.9 12.5 11.8 0 21.8-4.2 29.9-12.7 8.3-8.5 12.5-18.7 12.5-30.5-.1-12-4.2-22.1-12.5-30.7zM1404 533.9V390.8h58.8c15.4 0 27 4.6 35.1 13.9 8.1 9.1 12 20.1 12 33s-3.9 23.9-12 33c-8.1 9.1-19.7 13.7-35.1 13.7h-28.2v49.4H1404zm30.5-116.3v40.3h26.8c11 0 18.1-10 18.1-20.1 0-10-6.6-20.1-17.2-20.1h-27.7zM1599.4 492c.6 9.8 8.3 17.2 21.4 17.2 12.5 0 20.8-6 21-15.2.2-7.3-3.7-12.3-17.2-16.2l-17.2-4.8c-24.7-7.7-37-21.4-37-41.1 0-12.7 4.8-22.8 14.1-30.7 9.3-8.1 21.2-12 35.1-12 14.1 0 25.7 3.9 34.7 11.8 9.1 7.9 13.7 18.5 13.7 32h-30.3c0-9.8-6.6-16.2-18.5-16.2-10.8 0-18.5 6-18.5 14.3 0 6.9 5.2 11.6 15.4 14.5l17 5.4c26.8 7.7 39.9 22.2 39.3 43.2-.2 8.9-2.7 16.8-7.9 23.5-10.2 13.1-26 18.5-43.6 18.5-15.6 0-28-4.2-37.6-12.3-9.6-8.3-14.3-18.9-14.3-32h30.4zM1783 516.3c-8.9 13.1-23.7 19.7-44.2 19.7-14.3 0-26.4-4.8-36.1-14.1-9.8-9.6-14.5-21.8-14.5-36.8 0-15 4.8-27 14.5-36.3 9.8-9.3 21.8-13.9 36.1-13.9 14.1 0 26 4.8 35.3 14.3 9.6 9.3 14.3 21.6 14.3 36.8 0 2.7-.2 5.6-.4 8.9h-71c1.5 10.6 12.5 16.2 23.9 16.2 9.3 0 16.4-3.1 21.2-9.1l20.9 14.3zm-23.7-39.5c-2.9-22-37.4-22.2-41.9 0h41.9zM1897.2 455.4l-23.5 16.8c-4.2-6.4-10.4-9.8-18.7-9.8-6.4 0-12 2.1-16.8 6.4-4.8 4.2-7.3 9.6-7.3 16.2 0 6.9 2.5 12.5 7.3 16.8 4.8 4.4 10.4 6.4 16.8 6.4 8.3 0 14.5-3.3 18.7-9.8l23.5 16.6c-9.1 13.1-24.7 20.8-42.2 20.8-14.3 0-26.8-4.8-37.2-14.3-10.4-9.6-15.6-21.8-15.6-36.6 0-14.7 5.2-26.8 15.6-36.1 10.4-9.3 22.8-14.1 37.2-14.1 17.3.2 32.8 7.6 42.2 20.7zM1979.6 436.9h28.9v97h-28.9v-13.3c-5 9.3-15.4 15.4-25.1 15.4-22.6 0-38.4-14.5-38.4-41.1V437h28.9v51.7c0 13.9 8.7 19.3 17.2 19.3 10 0 17.4-6.2 17.4-19.7v-51.4zM2063.9 533.9H2035v-97h28.9v23.5c4.8-16.8 16.4-25.5 27.4-25.5 6.4 0 11.8 1.2 16.6 3.5l-5.2 26c-3.9-1.9-8.9-2.9-14.7-2.9-16 0-24.1 12.9-24.1 38.6v33.8zM2154.9 407.7c0 9.3-7.9 17-17.7 17-10 0-18.1-7.7-18.1-17s8.1-16.8 18.1-16.8c9.8-.1 17.7 7.4 17.7 16.8zM2122.9 436.9h28.7v97h-28.7zM2215.9 436.9h20.4v22.8h-20.4v74.1h-28.7v-74.1h-17.7v-22.8h17.7v-37.2h28.7v37.2zM2345.7 436.9l-59.8 144.5h-30.5l23.3-57.5-37.4-87h30.7l21.4 55 21.6-55h30.7z"/></g></svg>
                   </div>
                <ul class="footer-content-social-list">
                    {{#if extraFooterViewContext.socialMediaLinksTitle}}<li
                        class="footer-content-social-media-links-title">{{extraFooterViewContext.socialMediaLinksTitle}}
                    </li>{{/if}}
                    {{#each extraFooterViewContext.socialMediaLinks}}
                    <li><a {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                            data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}"
                            class="footer-content-social-link">{{#if icon}}<i
                                class="footer-content-social-icon icon-{{icon}}"></i>{{else}}{{text}}{{/if}}</a></li>
                    {{/each}}
                </ul>
            </div>
            {{/if}}

            <div class="footer-columns">
                {{#if extraFooterViewContext.col1Links}}
                <div class="footer-column-links">
                    <ul>
                        {{#each extraFooterViewContext.col1Links}}
                        {{#if href}}
                        <li class="footer-column-link-listitem"><a class="footer-column-link"
                                {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                                data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}">{{text}}</a></li>
                        {{else}}
                        <li class="footer-column-heading-listitem">
                            <h4 class="footer-column-heading">{{text}}</h4>
                        </li>
                        {{/if}}
                        {{/each}}
                    </ul>
                </div>
                {{/if}}
                {{#if extraFooterViewContext.col2Links}}
                <div class="footer-column-links">
                    <ul>
                        {{#each extraFooterViewContext.col2Links}}
                        {{#if href}}
                        <li class="footer-column-link-listitem"><a class="footer-column-link"
                                {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                                data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}">{{text}}</a></li>
                        {{else}}
                        <li class="footer-column-heading-listitem">
                            <h4 class="footer-column-heading">{{text}}</h4>
                        </li>
                        {{/if}}
                        {{/each}}
                    </ul>
                </div>
                {{/if}}
                {{#if extraFooterViewContext.col3Links}}
                <div class="footer-column-links">
                    <ul>
                        {{#each extraFooterViewContext.col3Links}}
                        {{#if href}}
                        <li class="footer-column-link-listitem"><a class="footer-column-link"
                                {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                                data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}">{{text}}</a></li>
                        {{else}}
                        <li class="footer-column-heading-listitem">
                            <h4 class="footer-column-heading">{{text}}</h4>
                        </li>
                        {{/if}}
                        {{/each}}
                    </ul>
                </div>
                {{/if}}
                {{#if extraFooterViewContext.col4Links}}
                <div class="footer-column-links">
                    <ul>
                        {{#each extraFooterViewContext.col4Links}}
                        {{#if href}}
                        <li class="footer-column-link-listitem"><a class="footer-column-link"
                                {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                                data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}">{{text}}</a></li>
                        {{else}}
                        <li class="footer-column-heading-listitem">
                            <h4 class="footer-column-heading">{{text}}</h4>
                        </li>
                        {{/if}}
                        {{/each}}
                    </ul>
                </div>
                {{/if}}
            </div>
        </div>
    </section>

    {{#with extraFooterViewContext.copyright}}
    {{#unless hide}}
    <section class="footer-content-bottom-section-container">
        <div class="footer-content-bottom-section">
            <div class="footer-content-copyright">
                {{#if showRange}}
                {{translate '&copy; $(0) &#8211; $(1) $(2)' initialYear currentYear companyName}}
                <!-- an en dash &#8211; is used to indicate a range of values -->
                {{else}}
                {{translate '&copy; $(0) $(1)' currentYear companyName}}
                {{/if}}
            </div>
        </div>
    </section>

    {{/unless}}
    {{/with}}
</div>



{{!----
Use the following context variables when customizing this template:

	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)

----}}