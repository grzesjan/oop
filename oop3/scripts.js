$(function() {

function Column(name) {
    var self = this;
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
        var $column = $("<div>").addClass("column");
        var $columnButton = $("<div>").addClass("column-button")
        var $columnTitle = $("<h2>").addClass("column-title").text(self.name);
        var $columnCardList = $("<ul>").addClass("column-card-list");
        var $columnDelete = $("<button>").addClass("btn-delete-column").text("Usuń kolumne");
        var $columnAddCard = $("<button>").addClass("add-card").text("Dodaj kartę");

        $columnDelete.click(function() {
            self.removeColumn();
        });

        $columnAddCard.click(function() {
            var textField = $("#card-name").val();
            self.addCard(new Card(textField));
        });

        $columnButton.append($columnDelete);
        $columnButton.append($columnAddCard);
        $column.append($columnTitle);
        $column.append($columnButton);
        $column.append($columnCardList);

        return $column;
    }
}

Column.prototype.addCard = function(card) {
	this.$element.children('ul').append(card.$element);
}
Column.prototype.removeColumn = function() {
	this.$element.remove();
}

function Card(description) {
	var self = this;
    this.description = description;
    this.$element = createCard(); 

    function createCard() {
        var $card = $('<li>').addClass('card');
        var $cardDescription = $('<p>').addClass('card-description').text(self.description);
        var $cardDelete = $('<button>').addClass('btn-delete-card').text('X');

        $cardDelete.click(function() {
			self.removeCard();
		});

		$card.append($cardDelete);
	    $card.append($cardDescription);

		return $card;
	}
}

Card.prototype.removeCard = function() {
	this.$element.remove();
}

var board = {
	name: 'Tablica Kanban',
    addColumn: function(column) {
		this.$element.append(column.$element);
		initSortable();
    },
    $element: $('#board .column-container')
};

function initSortable() {
    $('.column-card-list').sortable({
	connectWith: '.column-card-list',
	placeholder: 'card-placeholder',
    revert: true,
    cursor: "move"
    }).disableSelection();
}

$(".column-card-list").click(function() {
  $(".card").effect("bounce", "slow");
});

$('.create-column').click(function() {
	var name = $("#column-name").val();
	var column = new Column(name);
    
    board.addColumn(column);
});

var todoColumn = new Column('Do zrobienia');
var doingColumn = new Column('W trakcie');
var doneColumn = new Column('Skończone');

board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

var card1 = new Card('Nowe zadanie');
var card2 = new Card('Nowe zadanie');


todoColumn.addCard(card1);
doingColumn.addCard(card2);

});



