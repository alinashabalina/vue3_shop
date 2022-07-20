import { defineComponent } from "vue";
import PageHeader from "@/components/page-header/page-header.vue";
import PageFooter from "@/components/page-footer/page-footer.vue";
import CategoryMenu from "@/components/category-menu/category-menu.vue";
import ContactInfo from "@/components/contact-info/contact-info.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    PageHeader: PageHeader,
    PageFooter: PageFooter,
    CategoryMenu: CategoryMenu,
    ContactInfo: ContactInfo,
  },
  setup() { },

  return: {},
});
