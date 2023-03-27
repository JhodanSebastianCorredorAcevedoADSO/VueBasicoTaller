export default {
  data() {
    return {
      myObject: { id: 1, nombre: 'Producto A', precio: 100 },
      myArray: ['manzana', 'banana', 'naranja'],
      myObjectArray: [
        { id: 1, name: 'Producto A' },
        { id: 2, name: 'Producto B' },
        { id: 3, name: 'Producto C' },
      ],
      inputValue: '',
      myMessage: '',
    };
  },
  computed: {
    myArrayMapped() {
      return this.myArray.map((item, index) => `${index + 2}. ${item}`);
    },
  },
  methods: {
    removeFirstItem() {
      this.myArray.shift();
    },
    removeLastItem() {
      this.myArray.pop();
    },
    addFirstItem() {
      this.myArray.unshift('limón');
    },
    addLastItem() {
      this.myArray.push('sandía');
    },
    processInput() {
      this.mensaje = `Que paso mano, ${this.inputValue}`;
    },
  },
};