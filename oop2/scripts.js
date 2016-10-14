var btn1 = new Button('Nacisnij przycisk');

function Button(text) {
	this.text = text;
}

Button.prototype.create = function() {
    var txt1 = $("<p></p>").text("Nacisnales przycisk");
    var self = this;
    this.$element = $('<button>');
    this.$element.text(this.text);
    this.$element.click(function(){
        alert(self.text);
        $("body").append(txt1);
    });
    $("body").append(this.$element);
  }

btn1.create();
