import { mount } from '@vue/test-utils';

describe('Tag', () => {
  it('default demo works fine', () => {
    const demo = require('@/examples/tag/demos/default.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('theme demo works fine', () => {
    const demo = require('@/examples/tag/demos/theme.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('plain demo works fine', () => {
    const demo = require('@/examples/tag/demos/plain.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('checkable demo works fine', () => {
    const demo = require('@/examples/tag/demos/checkable.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('closable demo works fine', () => {
    const demo = require('@/examples/tag/demos/closable.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('icon demo works fine', () => {
    const demo = require('@/examples/tag/demos/icon.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('disabled demo works fine', () => {
    const demo = require('@/examples/tag/demos/disabled.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('long-text demo works fine', () => {
    const demo = require('@/examples/tag/demos/long-text.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('size demo works fine', () => {
    const demo = require('@/examples/tag/demos/size.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('shape demo works fine', () => {
    const demo = require('@/examples/tag/demos/shape.vue');
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
});