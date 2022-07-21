import { defineComponent } from "vue";
import ContactItem from "../contact-item/contact-item.vue";
import RectangleButton from "../shared/rectangle-button/rectangle-button.vue";

export default defineComponent({
  name: "ContactInfo",
  components: {
    RectangleButton: RectangleButton,
    ContactItem: ContactItem,
  },
  setup() { },

  return: {},
});
