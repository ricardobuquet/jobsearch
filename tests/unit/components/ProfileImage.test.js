import { shallowMount } from "@vue/test-utils";

import ProfileImage from '@/components/ProfileImage';

describe("Profile Image", () => {
  it("It renders", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
