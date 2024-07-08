/* empty css                          */
import { c as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BDSCWT75.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './free_CpuHn-5K.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to MBTI." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex flex-col items-center h-screen px-3 py-2 space-y-6 bg-gradient-to-b from-purple-300"> <h2 class="text-white text-2xl font-sans py-6 text-purple-500">MBTI 16型人格测试</h2> <img src="/mbti-16-personal.png" alt="no picture"> <button id="start-quiz-btn" class="absolute bottom-12 w-40 h-10 rounded-full bg-purple-500 text-white" type="button"> <a href="/quiz/free">开始 MBTI 测试</a> </button> </main> ` })}`;
}, "/Users/frorice/Documents/astro/blog/src/pages/index.astro", void 0);

const $$file = "/Users/frorice/Documents/astro/blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
