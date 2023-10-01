const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      apiURL: "./api.php",
      disks: [],
    };
  },

  methods: {
    getDisks() {
      axios.get(this.apiURL).then((response) => {
        this.disks = response.data;
        console.log(this.disks);
      });
    },
  },

  created() {
    this.getDisks();
  },
});

app.mount("#app");
