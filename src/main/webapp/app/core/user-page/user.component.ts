import { computed, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { type AccountStore } from '@/store';
import { useAccountStore } from '@/shared/config/store/account-store';

export default defineComponent({
  name: 'UserSpaceComponent',
  setup() {
    const user = useAccountStore();
    // Access store values through computed properties
    const userIdentity = computed(() => user.userIdentity);

    // Get the translation function using Vue I18n's `useI18n()`
    const { t } = useI18n();
    const daysOfWeek = computed(() => {
      if (t('locale') === 'en') {
        return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      } else {
        return ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
      }
    });

    return {
      userIdentity,
      t$: useI18n().t,
      daysOfWeek,
    };
  },
});
