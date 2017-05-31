class Button {
  constructor(input) {
    this.num = input.num;
    this.margin = 15;
    this.fontSize = 40;
    this.font = `${this.fontSize}px Arial`;
    c.font = `${this.fontSize}px Arial`;

    this.x = input.x;
    this.y = input.y;
    this.text = input.text;
    this.width = c.measureText(this.text).width + this.margin * 2;
    this.height = this.fontSize * 0.8 + this.margin * 2;
    this.onClick = input.onClick;
  }

  setFontSize(size) {
    this.y = 50 + this.num * (this.fontSize * 0.8 + this.margin * 2 + 50);

    this.fontSize = size;
    this.font = `${this.fontSize}px Arial`;
    c.font = `${this.fontSize}px Arial`;

    this.width = c.measureText(this.text).width + this.margin * 2;
    this.height = this.fontSize * 0.8 + this.margin * 2;
  }
}
