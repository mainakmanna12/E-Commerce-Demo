let cart_items = {};

$(document).ready(function(){
    if(localStorage.getItem('cart_items')){
        let prev_item = JSON.parse(localStorage.getItem('cart_items'));
        cart_items = {...prev_item};
    }
    update_cart();

    $(document).on('click', '.add_to_cart', function(){
        const $this = $(this);
        var itemId = $this.data('id');
        const item = {
            id: itemId,
            price: $this.data('price'),
            img: $this.data('img'),
            name: $this.data('name'),
            qty: $this.data('qty'),
            currency: $this.data('currency'),
        };

        cart_items = {...cart_items, [itemId]: item};
        update_cart();
    });

    function update_cart(){
        let count = Object.keys(cart_items).length
        
        $('.cart_count').text(count);
        localStorage.removeItem('cart_items');
        localStorage.setItem('cart_items', JSON.stringify(cart_items));
    }
});
