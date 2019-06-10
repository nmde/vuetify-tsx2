import VBtn from '@/components/VBtn';
import VBtnToggle from '@/components/VBtnToggle';
import VIcon from '@/components/VIcon';
import { component } from 'vue-tsx-support';
import SubTitle from '../SubTitle';

const ButtonToggleExample1 = component({
  render() {
    return (
      <div>
        <SubTitle>Button Toggle</SubTitle>
        <VBtnToggle>
          <VBtn>
            <VIcon>format_align_left</VIcon>
          </VBtn>
          <VBtn>
            <VIcon>format_align_center</VIcon>
          </VBtn>
          <VBtn>
            <VIcon>format_align_right</VIcon>
          </VBtn>
        </VBtnToggle>
      </div>
    );
  },
});

export default ButtonToggleExample1;
