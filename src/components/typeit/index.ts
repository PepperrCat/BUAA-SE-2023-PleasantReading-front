import TypeIt from 'typeit'

export default defineComponent({
  name: 'TypeIt',
  props: {
    /** 打字速度，以每一步之间的毫秒数为单位 */
    speed: {
      type: Number,
      default: 200,
    },
    values: {
      type: Array,
      defalut: [],
    },
    className: {
      type: String,
      default: 'type-it',
    },
    cursor: {
      type: Boolean,
      default: true,
    },
  },
  render() {
    return h(
      'span',
      {
        class: this.className,
      },
      {
        default: () => [],
      },
    )
  },
  mounted() {
    new (TypeIt as any)(`.${this.className}`, {
      strings: this.values,
      speed: this.speed,
      cursor: this.cursor,
    }).go()
  },
})

