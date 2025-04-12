import{_ as s,c as a,d as p,o as t}from"./app-GL-87P9J.js";const e={};function l(i,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="_2025-04-10" tabindex="-1"><a class="header-anchor" href="#_2025-04-10"><span>2025-04-10</span></a></h1><h2 id="주식조회-프로그램" tabindex="-1"><a class="header-anchor" href="#주식조회-프로그램"><span>주식조회 프로그램</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> streamlit <span class="token keyword">as</span> st</span>
<span class="line"><span class="token keyword">from</span> data <span class="token keyword">import</span> mockup_request</span>
<span class="line"><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd</span>
<span class="line"><span class="token keyword">from</span> matplotlib <span class="token keyword">import</span> pyplot <span class="token keyword">as</span> plt</span>
<span class="line"><span class="token keyword">import</span> requests</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">st<span class="token punctuation">.</span>set_page_config<span class="token punctuation">(</span></span>
<span class="line">    page_title<span class="token operator">=</span><span class="token string">&quot;주식정보조회&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    page_icon<span class="token operator">=</span><span class="token string">&quot;📈&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">mean_average</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> mean_width<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    new_array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    mean_width <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>mean_width<span class="token punctuation">)</span></span>
<span class="line">    half_width <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>mean_width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 원래코드</span></span>
<span class="line">    <span class="token comment"># for _ in range(half_width):</span></span>
<span class="line">    <span class="token comment">#     new_array.append(0)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> idx<span class="token punctuation">,</span> _ <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> idx <span class="token operator">&lt;</span> half_width<span class="token punctuation">:</span></span>
<span class="line">            <span class="token comment"># 원래코드: continue</span></span>
<span class="line">            newValue <span class="token operator">=</span> data<span class="token punctuation">[</span>idx<span class="token punctuation">]</span></span>
<span class="line">            new_array<span class="token punctuation">.</span>append<span class="token punctuation">(</span>newValue<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">elif</span> idx <span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>half_width <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token comment"># 원래코드: continue</span></span>
<span class="line">            newValue <span class="token operator">=</span> data<span class="token punctuation">[</span>idx<span class="token punctuation">]</span></span>
<span class="line">            new_array<span class="token punctuation">.</span>append<span class="token punctuation">(</span>newValue<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            newValue <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>idx <span class="token operator">-</span> half_width <span class="token punctuation">:</span> idx <span class="token operator">+</span> half_width <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> mean_width</span>
<span class="line">            new_array<span class="token punctuation">.</span>append<span class="token punctuation">(</span>newValue<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 원래코드</span></span>
<span class="line">    <span class="token comment"># for _ in range(half_width):</span></span>
<span class="line">    <span class="token comment">#     new_array.append(0)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> new_array</span>
<span class="line"></span>
<span class="line">st<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&quot;주식정보조회&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## Sidebar Header</span></span>
<span class="line">st<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>header<span class="token punctuation">(</span><span class="token string">&quot;User Input&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## Sidebar User Input</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">stock_code <span class="token operator">=</span> st<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>text_input<span class="token punctuation">(</span><span class="token string">&quot;Code&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;000660&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">stock_start_date <span class="token operator">=</span> st<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>date_input<span class="token punctuation">(</span><span class="token string">&quot;Start Date&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 조회 시작 날짜 입력</span></span>
<span class="line">stock_end_date <span class="token operator">=</span> st<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>date_input<span class="token punctuation">(</span><span class="token string">&quot;End Date&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 조회 끝 날짜 입력기</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># TODO: 밑 코드 이해하고, 코드리뷰하기</span></span>
<span class="line"><span class="token comment"># left, middle, right = st.sidebar.columns(3)</span></span>
<span class="line">left<span class="token punctuation">,</span> right <span class="token operator">=</span> st<span class="token punctuation">.</span>sidebar<span class="token punctuation">.</span>columns<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> right<span class="token punctuation">.</span>button<span class="token punctuation">(</span><span class="token string">&quot;조회&quot;</span><span class="token punctuation">,</span> icon<span class="token operator">=</span><span class="token string">&quot;:material/query_stats:&quot;</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    st<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Stock Code: </span><span class="token interpolation"><span class="token punctuation">{</span>stock_code<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    st<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;stock start date: </span><span class="token interpolation"><span class="token punctuation">{</span>stock_start_date<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    st<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;stock end date: </span><span class="token interpolation"><span class="token punctuation">{</span>stock_end_date<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Mock-up Request</span></span>
<span class="line">    <span class="token comment">## 디자인 목업: 회사 사이트 - 내용을 실제로 입력하지 않고, 디자인만 먼저</span></span>
<span class="line">    <span class="token comment">### 제목: 나는 제목이다, 내용: Lorem Ipsum Dolor</span></span>
<span class="line">    <span class="token comment">## 개발 목업(리퀘스트 목업)</span></span>
<span class="line">    <span class="token comment">### 원래 리퀘스트: 클라이언트 -&gt; 서버로 요청 -&gt; 서버가 지정된 프로세스를 처리 -&gt; 프론트에 응답</span></span>
<span class="line">    <span class="token comment">### 목업 리퀘스트: 클라이언트 0&gt; (가짜 서버로 요청) -&gt; (가짜 응답) -&gt; 사이트 먼저 만들기</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">## 가짜 응답 양식 지정 -&gt; 데이터 만들고 -&gt; 프론트에서 DF로 만들고 -&gt; 사이트 완성</span></span>
<span class="line">    <span class="token comment"># response = mockup_request(stock_code if stock_ticker_type_selector==&quot;stock_code&quot; else stock_ticker)</span></span>
<span class="line">    url <span class="token operator">=</span> <span class="token string">&quot;http://localhost:8000/query_stock/&quot;</span></span>
<span class="line"></span>
<span class="line">    headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;application/json&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	    <span class="token string">&quot;stock_code&quot;</span><span class="token punctuation">:</span> stock_code<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;start_date&quot;</span><span class="token punctuation">:</span> stock_start_date<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y%m%d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;end_date&quot;</span><span class="token punctuation">:</span> stock_end_date<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y%m%d&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>stock_start_date<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">,</span>json<span class="token operator">=</span>data<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> err<span class="token punctuation">:</span></span>
<span class="line">        st<span class="token punctuation">.</span>write<span class="token punctuation">(</span>err<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># if response[&quot;status_code&quot;] == &quot;200&quot;:</span></span>
<span class="line">    <span class="token comment"># data = response[&quot;data&quot;]</span></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">        data <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        df_ma15 <span class="token operator">=</span> mean_average<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;values&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span></span>
<span class="line">        df_ma30 <span class="token operator">=</span> mean_average<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;values&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        df<span class="token punctuation">[</span><span class="token string">&#39;ma15&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> df_ma15</span>
<span class="line">        df<span class="token punctuation">[</span><span class="token string">&#39;ma30&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> df_ma30</span>
<span class="line"></span>
<span class="line">        st<span class="token punctuation">.</span>dataframe<span class="token punctuation">(</span>df<span class="token punctuation">,</span> hide_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></span>
<span class="line">        st<span class="token punctuation">.</span>line_chart<span class="token punctuation">(</span>df<span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token string">&#39;dates&#39;</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token punctuation">[</span> <span class="token string">&#39;ma15&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ma30&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;values&#39;</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> err<span class="token punctuation">:</span></span>
<span class="line">        st<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;주식정보를 조회하는데 실패했습니다&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const o=s(e,[["render",l],["__file","2025-04-10.html.vue"]]),u=JSON.parse('{"path":"/til/2025-04-10.html","title":"2025-04-10","lang":"ko-KR","frontmatter":{},"headers":[{"level":2,"title":"주식조회 프로그램","slug":"주식조회-프로그램","link":"#주식조회-프로그램","children":[]}],"git":{"updatedTime":1744458877000,"contributors":[{"name":"rlaekdrms","username":"rlaekdrms","email":"danielyoonho@naver.com","commits":2,"url":"https://github.com/rlaekdrms"}]},"filePathRelative":"til/2025-04-10.md"}');export{o as comp,u as data};
