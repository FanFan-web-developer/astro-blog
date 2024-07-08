/* empty css                          */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot, g as createAstro, h as renderComponent, m as maybeRenderHead } from '../astro_BDSCWT75.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState } from 'react';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/frorice/Documents/astro/blog/src/layouts/Layout.astro", void 0);

const questions = [
	{
		id: 1,
		question: "在社交场合中，你通常是主动开场的人吗？",
		dimension: "E-I"
	},
	{
		id: 2,
		question: "你更喜欢按照计划行事而不是随意应变吗？",
		dimension: "S-N"
	},
	{
		id: 3,
		question: "你通常依靠事实和逻辑来做决策吗？",
		dimension: "T-F"
	},
	{
		id: 4,
		question: "你更喜欢独自完成任务而不是团队合作吗？",
		dimension: "J-P"
	},
	{
		id: 5,
		question: "在选择活动时，你更倾向于新奇的体验而不是熟悉的事物吗？",
		dimension: "S-N"
	},
	{
		id: 6,
		question: "你在处理问题时，更注重人的情感而不是客观事实吗？",
		dimension: "T-F"
	},
	{
		id: 7,
		question: "你通常能很快决定一件事，而不需要太多时间考虑吗？",
		dimension: "J-P"
	},
	{
		id: 8,
		question: "你更倾向于思考未来的可能性而不是目前的现实情况吗？",
		dimension: "S-N"
	},
	{
		id: 9,
		question: "你在社交场合中会感到疲惫或能量被消耗吗？",
		dimension: "E-I"
	},
	{
		id: 10,
		question: "你在处理问题时，会更多地依赖你的直觉而不是现有的知识吗？",
		dimension: "S-N"
	},
	{
		id: 11,
		question: "你在做决定时，是否更倾向于考虑原则和标准而不是个人情况？",
		dimension: "T-F"
	},
	{
		id: 12,
		question: "你更喜欢安排和组织好每件事，而不是随时应变吗？",
		dimension: "J-P"
	},
	{
		id: 13,
		question: "你在工作中更喜欢按照自己的节奏，而不是别人的节奏吗？",
		dimension: "J-P"
	},
	{
		id: 14,
		question: "你倾向于从多个角度考虑问题而不是简单地接受现有的答案吗？",
		dimension: "S-N"
	},
	{
		id: 15,
		question: "在面对新事物时，你是否感到兴奋而不是焦虑？",
		dimension: "J-P"
	},
	{
		id: 16,
		question: "你是否喜欢探索复杂和抽象的理论而不是简单明了的事实？",
		dimension: "J-P"
	}
];
const freeQuiz = {
	questions: questions
};

var MBTI_DIMENSIONS = /* @__PURE__ */ ((MBTI_DIMENSIONS2) => {
  MBTI_DIMENSIONS2["E_I"] = "E-I";
  MBTI_DIMENSIONS2["S_N"] = "S-N";
  MBTI_DIMENSIONS2["T_F"] = "T-F";
  MBTI_DIMENSIONS2["J_P"] = "J-P";
  return MBTI_DIMENSIONS2;
})(MBTI_DIMENSIONS || {});

const Quiz = () => {
  const questionIndex = useRef(0);
  const dimensions = useRef({
    [MBTI_DIMENSIONS.E_I]: 0,
    [MBTI_DIMENSIONS.S_N]: 0,
    [MBTI_DIMENSIONS.T_F]: 0,
    [MBTI_DIMENSIONS.J_P]: 0
  });
  const [currentQuestion, setCurrentQuestion] = useState(freeQuiz.questions[questionIndex.current]);
  const moveOnNextQuestion = (point) => {
    dimensions.current[currentQuestion.dimension] += point;
    questionIndex.current++;
    if (questionIndex.current >= freeQuiz.questions.length) {
      location.href = "/mbti/" + Object.keys(dimensions.current).reduce((prev, key) => {
        const traits = key.split("-");
        return prev + (dimensions.current[key] > 0 ? traits[0] : traits[1]);
      }, "");
    }
    setCurrentQuestion(freeQuiz.questions[questionIndex.current]);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full py-6 space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      "问题 ",
      /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: currentQuestion.id }),
      " / ",
      freeQuiz.questions.length
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-44 p-3 rounded-xl bg-fuchsia-300 text-white shadow-lg", children: currentQuestion.question }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center space-y-3", children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "flex justify-center items-center w-full h-12 shadow-sm rounded-lg border border-purple-400 bg-white",
          onClick: () => moveOnNextQuestion(1),
          children: "是"
        }
      ),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "flex justify-center items-center w-full h-12 shadow-sm rounded-lg border border-red-400 bg-white",
          onClick: () => moveOnNextQuestion(-1),
          children: "否"
        }
      )
    ] })
  ] });
};

const $$Free = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Quiz." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex flex-col items-center h-screen px-3 py-2 space-y-6 bg-gradient-to-b from-purple-100"> ${renderComponent($$result2, "Quiz", Quiz, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/frorice/Documents/astro/blog/src/components/quiz", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/frorice/Documents/astro/blog/src/pages/quiz/free.astro", void 0);

const $$file = "/Users/frorice/Documents/astro/blog/src/pages/quiz/free.astro";
const $$url = "/quiz/free";

const free = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Free,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, free as f };
