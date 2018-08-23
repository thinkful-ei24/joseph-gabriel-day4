const addToList = function(html){
  $('.shopping-list').append(html);
};
const listItemToHtml = function(listItem){
  return `
  <li>
    <span class="shopping-item">${listItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li> `;
};
function main(){
  $('#js-shopping-list-form').submit(function(e){
    e.preventDefault();
    const inputObj = $('.js-shopping-list-entry');
    inputObj.val('');
    const currentListItem = listItemToHtml(inputObj.val());
    addToList(currentListItem);
  });
  $('ul.shopping-list').on('click','.shopping-item-toggle', function(e){
    $(this).parent().prev().toggleClass('shopping-item__checked');
  });
  $('ul.shopping-list').on('click','.shopping-item-delete', function(e){
    $(this).parent().parent().remove();
  });

}

$(main);