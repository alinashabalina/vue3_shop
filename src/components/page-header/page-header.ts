import { defineComponent } from "vue";
import HeaderButton from "@/components/header-button/header-button.vue";
import HeaderSearch from "@/components/header-search/header-search.vue";

export default defineComponent({
  name: "PageHeader",
  components: {
    HeaderButton: HeaderButton,
    HeaderSearch: HeaderSearch,
  },
  setup() {},

  return: {},
});
