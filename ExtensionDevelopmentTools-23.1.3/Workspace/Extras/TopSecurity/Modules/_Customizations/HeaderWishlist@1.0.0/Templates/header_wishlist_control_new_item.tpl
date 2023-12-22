<a class="product-list-control-new-item-button-create" data-action="header-show-add-new-list-form">
    {{translate 'Create a New List'}}
</a>
<form action="#" data-action="header-create-and-move" data-type="header-wishlist-control-add-new-list-form"
    class="product-list-control-new-item-add-new-list-form">
    <div class="product-list-control-new-item-add-new-list-input-container" data-validation="control-group">
        <input class="product-list-control-new-item-add-new-list-input" name="name" type="text"
            data-type="new-header-wishlist-name" placeholder="{{translate 'Your new list name'}}">
    </div>
    <div class="product-list-control-new-item-add-new-list-buttons">
        <button type="submit" class="product-list-control-new-item-button-create">
            {{translate 'Create'}}
        </button>
    </div>
</form>