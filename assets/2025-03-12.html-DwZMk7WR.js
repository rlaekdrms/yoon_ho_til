import{_ as s,c as a,d as t,o as p}from"./app-CCD6v6RA.js";const e={};function c(i,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="_2025-03-12" tabindex="-1"><a class="header-anchor" href="#_2025-03-12"><span>2025-03-12</span></a></h1><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> streamlit <span class="token keyword">as</span> st</span>
<span class="line"></span>
<span class="line">st<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&quot;주식정보조회&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## Sidebar Header</span></span>
<span class="line">st<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>header<span class="token punctuation">(</span><span class="token string">&quot;User Input&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## Sidebar User Input</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ticker_type: 라디오 버튼</span></span>
<span class="line">st<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>radio<span class="token punctuation">(</span><span class="token string">&quot;Ticker Type Selector&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">&quot;stock_ticker&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;stock_code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#stock_ticker, stock_code</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">stock_ticker <span class="token operator">=</span> st<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>text_input<span class="token punctuation">(</span><span class="token string">&quot;Ticker&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;AAPL&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 주식 코드 또는 ticker(이름)을 입력할 곳</span></span>
<span class="line">stock_start_date <span class="token operator">=</span> st<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>date_input<span class="token punctuation">(</span><span class="token string">&quot;Start Date&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 조회 시작 날짜 입력기</span></span>
<span class="line">stock_end_date <span class="token operator">=</span> st<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>date_input<span class="token punctuation">(</span><span class="token string">&quot;End Date&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 조회 끝 날짜 입력기</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 본 페이지 내용</span></span>
<span class="line"></span>
<span class="line">st<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Stock ticker: </span><span class="token interpolation"><span class="token punctuation">{</span>stock_ticker<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">st<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;stock start date: </span><span class="token interpolation"><span class="token punctuation">{</span>stock_start_date<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">st<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;stock end date: </span><span class="token interpolation"><span class="token punctuation">{</span>stock_end_date<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const l=s(e,[["render",c],["__file","2025-03-12.html.vue"]]),u=JSON.parse('{"path":"/til/2025-03-12.html","title":"2025-03-12","lang":"ko-KR","frontmatter":{},"headers":[],"git":{"updatedTime":1741786768000,"contributors":[{"name":"rlaekdrms","username":"rlaekdrms","email":"danielyoonho@naver.com","commits":1,"url":"https://github.com/rlaekdrms"}]},"filePathRelative":"til/2025-03-12.md"}');export{l as comp,u as data};
