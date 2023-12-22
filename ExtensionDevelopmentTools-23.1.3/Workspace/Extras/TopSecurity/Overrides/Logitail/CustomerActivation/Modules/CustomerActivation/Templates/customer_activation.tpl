<section class="password-reset-container">

  <header class="login-register-header">
    <h1 class="login-register-reset-password-title">
      {{translate 'Reset Password'}}
    </h1>
  </header>
  <div class="login-register-reset-password-body">
    <form class="login-register-reset-password-form" name="customer-activate-module" novalidate>
      {{#if validkey}}
      
      <p class="login-register-reset-password-description">
        {{translate 'Activate your account <br>Set a password to activate your account. <br>The password must contain at least one uppercase, <br>one lowercase, one number and be 8 characters or longer.'}}
        
      </p>
      <div class="login-register-reset-password-control-group" data-validation="control-group">
        <label class="login-register-reset-password-control-label" for="password">
          {{translate 'Password'}} <small class="login-register-reset-password-forgot-password-form-required">*</small>
        </label>
        <div class="login-register-reset-password-controls" data-validation="control">
          <input type="password" class="login-register-reset-password-input" id="password" name="password" value="">
        </div>
      </div>
      <div class="login-register-reset-password-control-group" data-validation="control-group">
        <label class="login-register-reset-password-control-label"
          for="confirm_password">{{translate 'Confirm Password'}} <small class="login-register-reset-password-forgot-password-form-required">*</small></label>
        <div class="login-register-reset-password-controls" data-validation="control">
          <input type="password" class="login-register-reset-password-input" id="confirm_password"
            name="confirm_password" value="">
        </div>
      </div>
      <div data-type="alert-placeholder"></div>
      <div class="login-register-reset-password-control-group">
        <a data-action="activation-submit"
          class="login-register-reset-password-submit">{{translate 'Change Password'}}</a>
        <a class="login-register-reset-password-sign-in" data-touchpoint="login" data-hashtag="#login-register">
          {{translate 'Cancel & Return To Login'}}</a>
      </div>
      {{else}}
      <p class="login-register-reset-password-description">
        {{translate 'This link has expired or wrong. Please contact your account administrator.'}}
      </p>
      <div class="login-register-reset-password-control-group">
        <a href="/" data-touchpoint="home" class="login-register-reset-password-submit">{{translate 'Continue'}}</a>
      </div>
      {{/if}}
    </form>
  </div>
</section>