const BorderPreviewer = {
  data() {
    return {
      input_border_radius: 0,
      border_radius: "0px",
      border_radius_px: 0,
    };
  },
  methods: {
    SetBorderRange() {
      this.border_radius = `${this.input_border_radius}px`;
      this.border_radius_px = this.input_border_radius;
    },
    SetBorderPx(e) {
      e.preventDefault();
      this.border_radius = `${this.border_radius_px}px`;
      this.input_border_radius = this.border_radius_px;
    },
  },
  computed: {
    AnoAtual() {
      const data = new Date();
      const ano = data.getFullYear();

      return ano;
    },
  },
};

Vue.createApp(BorderPreviewer).mount("#app");
