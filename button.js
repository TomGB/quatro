class Button {
  constructor(input) {
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');

    this.margin = 15;
    this.fontSize = 40;
    c.font = `${this.fontSize}px Arial`;

    this.x = input.x;
    this.y = input.y;
    this.text = input.text;
    this.width = c.measureText(this.text).width + this.margin * 2;
    this.height = this.fontSize * 0.8 + this.margin * 2;
    this.onClick = input.onClick;
  }
}
