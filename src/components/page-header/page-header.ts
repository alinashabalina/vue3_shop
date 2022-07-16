import { defineComponent } from "vue";
import MenuButton from "@/components/shared/menu-button/menu-button.vue";
import HeaderSearch from "@/components/header-search/header-search.vue";

export default defineComponent({
  name: "PageHeader",
  components: {
    MenuButton: MenuButton,
    HeaderSearch: HeaderSearch,
  },
  setup() {},

  return: {},
});
