import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav";

describe("mainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch(/Bobo Careers/);
  });

  describe("when user is logged out", () => {
    it("prompts users to sign in", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.findComponent({ name: "ActionButton" });
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("displays profile image", async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
