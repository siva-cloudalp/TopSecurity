{{#if customContent}}
    {{{customContent}}}
{{else}}
    <section class="login-register">
        <header class="login-register-header">
            <h1 class="login-register-title"> {{translate 'Password Changed'}}</h1>
        </header>
        <div class="login-register-reset-password-body">
            <div class="login-register-reset-password-form" name="customer-activate-module">
                <div class="login-register-reset-password-control-group">
                    <a data-touchpoint="login" data-hashtag="#login-register"
                        class="login-register-reset-password-submit">{{translate 'Go to Login'}}</a>
                </div>
            </div>
        </div>
    </section>
{{/if}}