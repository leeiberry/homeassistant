




<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-aZYk5AYsRiFiFG04Si6FnQoHFwAugnodzKJXgafKqPWsrgrjoWRsapCn//vFuWqjSzr72ucZfPq8/ZbduuSeQg==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-next-699624e4062c462162146d384a2e859d.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-/4fzi8yme6m7qXZHZib/VnRl51ncBRcxLZIQ6ipY5wX7pwSQWiqAe7jnXn6PwDvWsyGNPxDIAANrgWPHgxNb2A==" rel="stylesheet" href="https://github.githubassets.com/assets/github-next-ff87f38bcca67ba9bba976476626ff56.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>lovelace-card-mod/card-mod.js at master · thomasloven/lovelace-card-mod</title>
    <meta name="description" content="🔹 Add CSS styles to (almost) any lovelace card. Contribute to thomasloven/lovelace-card-mod development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">
  <meta name="apple-itunes-app" content="app-id=1477376905">

    <meta name="twitter:image:src" content="https://avatars0.githubusercontent.com/u/1299821?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="thomasloven/lovelace-card-mod" /><meta name="twitter:description" content="🔹 Add CSS styles to (almost) any lovelace card. Contribute to thomasloven/lovelace-card-mod development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars0.githubusercontent.com/u/1299821?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="thomasloven/lovelace-card-mod" /><meta property="og:url" content="https://github.com/thomasloven/lovelace-card-mod" /><meta property="og:description" content="🔹 Add CSS styles to (almost) any lovelace card. Contribute to thomasloven/lovelace-card-mod development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
    <link rel="shared-web-socket" href="wss://live.github.com/_luau/eyJ2IjoiVjMiLCJ1IjoxNzQyMDgzMywicyI6NDk5NjE0NTk5LCJjIjo4Mzk4Mjg3LCJ0IjoxNTkyOTg1NjQ3fQ==--0f8b64cd4df78947cdd8e553fbef2e2ca424328fbf4bb824efe3e6a42cab072b" data-refresh-url="/_ws">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="DF7B:52DD:DAAF3:13485D:5EF30805" data-pjax-transient="true" /><meta name="html-safe-nonce" content="a059674294d8ce6ac6e251cf88c4e0f87087f6ac" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS90aG9tYXNsb3Zlbi9sb3ZlbGFjZS1jYXJkLW1vZCIsInJlcXVlc3RfaWQiOiJERjdCOjUyREQ6REFBRjM6MTM0ODVEOjVFRjMwODA1IiwidmlzaXRvcl9pZCI6IjQyNTQ4MjA0ODU5MDIxNzU2MjciLCJyZWdpb25fZWRnZSI6ImFwLXNvdXRoZWFzdC0yIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-pjax-transient="true" /><meta name="visitor-hmac" content="b8732f5f2739944085d118177667bfae21b2427bae805f83963bd69c4079c75a" data-pjax-transient="true" />



  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-actor-id" content="17420833" /><meta name="octolytics-actor-login" content="leeiberry" /><meta name="octolytics-actor-hash" content="f2962d7a9424f6c452dbe9832813d4b8b23a31f0b9bf40096147d973e7f47771" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />


<meta name="optimizely-datafile" content="{}" />

    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="084ea897c595f63b3ad38e200b088087">

<meta class="js-ga-set" name="dimension10" content="Responsive" data-pjax-transient>

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="leeiberry">


      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="OGI3Y2M5YTc3MzMwZjA5ZmJlZDE1YmRlMDJjYWU3MDJlMDA1OGQzZTM1MDE2YzU2NzNiNDRlZWEyNzE0NGEyYXx7InJlbW90ZV9hZGRyZXNzIjoiNTguMTYwLjc5LjE5OSIsInJlcXVlc3RfaWQiOiJERjdCOjUyREQ6REFBRjM6MTM0ODVEOjVFRjMwODA1IiwidGltZXN0YW1wIjoxNTkyOTg1NjQ3LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS,PAGE_STALE_CHECK,PRIMER_NEXT">

  <meta http-equiv="x-pjax-version" content="84a56c15483533a341d5ae168934043d">
  

      <link href="https://github.com/thomasloven/lovelace-card-mod/commits/master.atom" rel="alternate" title="Recent Commits to lovelace-card-mod:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/thomasloven/lovelace-card-mod git https://github.com/thomasloven/lovelace-card-mod.git">

  <meta name="octolytics-dimension-user_id" content="1299821" /><meta name="octolytics-dimension-user_login" content="thomasloven" /><meta name="octolytics-dimension-repository_id" content="190927524" /><meta name="octolytics-dimension-repository_nwo" content="thomasloven/lovelace-card-mod" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="190927524" /><meta name="octolytics-dimension-repository_network_root_nwo" content="thomasloven/lovelace-card-mod" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
        <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
      </span>

      
      



          <header class="Header py-lg-0 js-details-container Details flex-wrap flex-lg-nowrap px-3" role="banner">
  <div class="Header-item d-none d-lg-flex">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div class="Header-item d-lg-none">
    <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
    </button>
  </div>

  <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search header-search-current js-header-search-current  flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to js-header-search-current-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="190927524" data-scoped-search-url="/thomasloven/lovelace-card-mod/search" data-unscoped-search-url="/search" action="/thomasloven/lovelace-card-mod/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" value="ZwQwF58LnAPRH7Y6gzTuRxijP1ThivykNPs68WdmaKJEuPjKNZy99ERfdLXmVIVSVUN9cWhsOIFMr2+kjWDxKA==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


    <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link py-lg-3 d-block d-lg-none py-2 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>

    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link py-lg-3 d-inline-block" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-3 border-top border-lg-top-0 border-white-fade-15" href="/leeiberry">
      <img class="avatar avatar-user" src="https://avatars1.githubusercontent.com/u/17420833?s=40&amp;v=4" width="20" height="20" alt="@leeiberry" />
      leeiberry
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="UsSv7ZW9X3SVtRPWgzAXaXIUtMC3McDZCy9Xi43vGbtn38T4a1bnSQfKuhB0KFsR1MvZ0IO5NEEGwJZxTgBl5Q==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-3 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path></svg>
        Sign out
      </button>
</form></nav>

  </div>

  <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
    

  </div>


  <div class="Header-item position-relative d-none d-lg-flex">
    <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"></path></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="thomasloven/lovelace-card-mod">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/thomasloven/lovelace-card-mod/issues/new/choose" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

  </div>

  <div class="Header-item position-relative mr-0 d-none d-lg-flex">
    
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/leeiberry/feature_preview/indicator_check">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img
  alt="@leeiberry"
  width="20"
  height="20"
  src="https://avatars2.githubusercontent.com/u/17420833?s=60&amp;v=4"
  class="avatar avatar-user " />

      <span class="feature-preview-indicator js-feature-preview-indicator" style="top: 10px;" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2" style="width: 180px" >
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/leeiberry" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">leeiberry</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context lh-condensed" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container rounded-1 px-2 py-1 mt-2 border"
  data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:1299821,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:17420833,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;}}" data-hydro-click-hmac="034f62d2ab9f4e7b89f1106153db9924af3defc752df339a1280a2c482ddf714">
      <div class="d-flex flex-items-center flex-items-stretch">
        <div class="f6 lh-condensed user-status-header d-flex user-status-emoji-only-header circle">
          <div class="user-status-emoji-container flex-shrink-0 mr-2 d-flex flex-items-center flex-justify-center lh-condensed-ultra v-align-bottom">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path></svg>
          </div>
        </div>
        <div class="
          
           user-status-message-wrapper f6 min-width-0"
           style="line-height: 20px;" >
          <div class="css-truncate css-truncate-target width-fit text-gray-dark text-left">
              <span class="text-gray">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?circle=0&amp;compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="HDaHI2P+uq+e2TUa6WyD+n4UtGQtTGEPrTCHw5rFbY1rvYdxSthUB9OO0j9/v2LeMaA0pOHiM2TC6vIZtZMn5A==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-06-24T16:30:47+08:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-06-24T17:00:47+08:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-06-24T20:00:47+08:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2020-06-24T23:59:59+08:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2020-06-28T23:59:59+08:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>

    <a role="menuitem" class="dropdown-item" href="/leeiberry" data-ga-click="Header, go to profile, text:your profile" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;target&quot;:&quot;YOUR_PROFILE&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="bb38b0f0ab43f7256ba8bf6609523292bef03cda540fdfafd442c3d2d6eb0987" >Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/leeiberry?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;target&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="94936f28ccab2936aa67c101019a8a81a8f009463c05f83c1a3e4903d511ce3d" >Your repositories</a>


    <a role="menuitem" class="dropdown-item" href="/leeiberry?tab=projects" data-ga-click="Header, go to projects, text:your projects" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;target&quot;:&quot;YOUR_PROJECTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="ce5e9d9bcba731a82c2a805fac6c5a466c615e58a9990d94a339c75e87a863a1" >Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/leeiberry?tab=stars" data-ga-click="Header, go to starred repos, text:your stars" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;target&quot;:&quot;YOUR_STARS&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="68e0b050eff8326c5ae0276b526f9ab3e0f022edef86da1672741a636310659f" >Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;target&quot;:&quot;YOUR_GISTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="b25d681d06526b694d4f43af55327483efe6d214338c4af712292c5386ac3e03" >Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      <a role="menuitem" class="dropdown-item" href="/settings/billing" data-ga-click="Header, go to billing, text:upgrade" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;target&quot;:&quot;UPGRADE&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="4e44d2977608deb34683b0f23d0f6ee9519e470aeb807836a297bc71203994b7" >Upgrade</a>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/leeiberry/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}"
    data-feature-preview-close-hmac="83e2ed872876637f5e25ed47609f1d66718a8f86f70d40ee430c07910c21bff3"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}"
    data-hydro-click-hmac="18481c056d50cfee1c5289e8b84ccdf9fbfac20da4c293d5fd6301b6c2a0e310"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;target&quot;:&quot;HELP&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="3c28f7d45bd1b8188383eddfe38d0d9c199918283f3c4609c3ef539eff54f1be" >Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;target&quot;:&quot;SETTINGS&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="2a8654c5022d9cd7e1f7fd18ef27d6519c35ec1c6f79743f08dd5fdf88056821" >Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="1l/zSk9M3zPYpuNRmbemsHr3wdYCDI+9AvYRe7FqI5LjRJhfsadnDkrZSpdur+rI3CisxjaEeyUPGdCBcoVfzA==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;target&quot;:&quot;SIGN_OUT&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="c4204bb00d9c82bbe2b27efb5cd3e779caea7a1db7ce6568429f82a088a1cb2a"  role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_85fb" hidden="hidden" class="form-control" /><input type="hidden" name="timestamp" value="1592985647050" class="form-control" /><input type="hidden" name="timestamp_secret" value="5c06b230e9ba2efbc26e8983cb50be76819b9a25ab42c2a348d852438f1529fd" class="form-control" />
</form>  </details-menu>
</details>

  </div>

</header>

        

    </div>

  <div id="start-of-content" class="show-on-focus"></div>




    <div id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  js-flash-template-container">
  <div class=" px-2" >
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
    </button>
    
      <div class="js-flash-template-message"></div>

  </div>
</div>
  </template>
</div>


      

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




  <div
    class="application-main "
    data-commit-hovercards-enabled
    data-discussion-hovercards-enabled
    data-issue-and-pr-hovercards-enabled
  >
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      

  


      <div class="border-bottom shelf intro-shelf js-notice mb-0 pb-4">
  <div class="width-full container">
    <div class="width-full mx-auto shelf-content">
      <h2 class="shelf-title">Learn Git and GitHub without any code!</h2>
      <p class="shelf-lead">
          Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.
      </p>
      <a class="btn btn-primary shelf-cta" target="_blank" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;READ_GUIDE&quot;,&quot;repository_id&quot;:190927524,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="7bbe5f6cc7b7166d141e9e85485edea6d2d08aab6eb809e63fc6d5d0d2794760" href="https://guides.github.com/activities/hello-world/">Read the guide</a>
    </div>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="shelf-dismiss js-notice-dismiss" action="/dashboard/dismiss_bootcamp" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="delete" /><input type="hidden" name="authenticity_token" value="gwfGTu1UjVdfngRR5y1WrSa4ZW3D/vos9Xa2s4w+azrq5IBptm2CDjXtSv5pe0KISIQtXEsETIvUbbTS3TSGUg==" />
      <button name="button" type="submit" class="mr-1 close-button tooltipped tooltipped-w" aria-label="Hide this notice forever" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;DISMISS_BANNER&quot;,&quot;repository_id&quot;:190927524,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="da2c85e34cb2777e228e5dbf8b072d5f8a04c96fffa761f3fdee05d947c07493">
        <svg aria-label="Hide this notice forever" class="octicon octicon-x v-align-text-top" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
</button></form>  </div>
</div>











  <div class="pagehead repohead hx_repohead readability-menu bg-gray-light pb-0 pt-3 border-0 mb-5">

    <div class="d-flex mb-3 px-3 px-md-4 px-lg-5">

      <div class="flex-auto min-width-0 width-fit mr-3">
        <h1 class="public  d-flex flex-wrap flex-items-center break-word float-none f3">
  
      <svg class="octicon octicon-repo" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
  
  <span class="author ml-2 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/thomasloven/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomasloven">thomasloven</a>
  </span>
  <span class="path-divider flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/thomasloven/lovelace-card-mod">lovelace-card-mod</a>
  </strong>
  
</h1>


      </div>

      <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">




  <li>
    

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="js-social-form js-social-container clearfix" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="vE6nJSy2z//wP3XShflICc6SAJGA13G+UHLxQMQ0NRKmB7VRrkx89DIgBJYGiH7XVMbARg5NzKW2pExInNi57w==" />      <input type="hidden" name="repository_id" value="190927524">

      <details class="details-reset details-overlay select-menu float-left" >
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:190927524,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="6e0ac68884f523ce3ebed6b45488eb0006ea82054fd0385dca3fbe7d6d1994ef" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5 "
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button
              type="submit"
              name="do"
              value="included"
              class="select-menu-item width-full"
              aria-checked="true"
              role="menuitemradio"
              
            >
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.75a.75.75 0 00-1.238-.57L3.472 5H1.75A1.75 1.75 0 000 6.75v2.5C0 10.216.784 11 1.75 11h1.723l3.289 2.82A.75.75 0 008 13.25V2.75zM4.238 6.32L6.5 4.38v7.24L4.238 9.68a.75.75 0 00-.488-.18h-2a.25.25 0 01-.25-.25v-2.5a.25.25 0 01.25-.25h2a.75.75 0 00.488-.18zm7.042-1.1a.75.75 0 10-1.06 1.06L11.94 8l-1.72 1.72a.75.75 0 101.06 1.06L13 9.06l1.72 1.72a.75.75 0 101.06-1.06L14.06 8l1.72-1.72a.75.75 0 00-1.06-1.06L13 6.94l-1.72-1.72z"></path></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/thomasloven/lovelace-card-mod/watchers"
          aria-label="8 users are watching this repository">
          8
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/thomasloven/lovelace-card-mod/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="smk9GPkyUFND4G2uU/euaQKS7kBugCMTujBCjFCAgTilYANPE2Qrjj6wKcvi/SsD3441UrIm6RwbyBWh3vyjuw==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Unstar thomasloven/lovelace-card-mod" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:190927524,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="6fd27d9c7a70bed6f554ac947d4257907e21f011c295d39579de63acb772c75d" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg height="16" class="octicon octicon-star-fill" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>

        Unstar
</button>        <a class="social-count js-social-count" href="/thomasloven/lovelace-card-mod/stargazers"
           aria-label="144 users starred this repository">
           144
        </a>
</form>
    <form class="unstarred js-social-form" action="/thomasloven/lovelace-card-mod/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="xbhI7jaWOxO2H3Q9sBIFR3be8aN5gBdY7vgc+jeM9fApQ66W7KNOP9ftrMlNjewsFQfefHQ9JglqYsa9TsyVlw==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Star thomasloven/lovelace-card-mod" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:190927524,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="cc6886f3e914ac764563278d3da635325308c08b03f74a855b7c1fb43fae22ff" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg height="16" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>

        Star
</button>        <a class="social-count js-social-count" href="/thomasloven/lovelace-card-mod/stargazers"
           aria-label="144 users starred this repository">
          144
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/thomasloven/lovelace-card-mod/fork" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="OWU20jOebdKLzzV8PfQrTKWaQ2izPM22rpklkgLHHw/h9O2MizNpoR2DF8a3SaUjDxQQ4KflQ2gnE3kYXC1OIg==" />
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:190927524,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="084d65bb29e18f8597d468086480259a0f553181df79c1d57eb216f6e7a654f6" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of thomasloven/lovelace-card-mod to your account" aria-label="Fork your own copy of thomasloven/lovelace-card-mod to your account">              <svg class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
              Fork
</button></form>
    <a href="/thomasloven/lovelace-card-mod/network/members" class="social-count"
       aria-label="24 users forked this repository">
      24
    </a>
  </li>
</ul>

    </div>
      
<nav class="UnderlineNav js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden px-3 px-md-4 px-lg-5 bg-gray-light" aria-label="Repository" data-pjax="#js-repo-pjax-container">
  <ul class="UnderlineNav-body list-style-none ">
            <li class="d-flex">
          <a class="js-selected-navigation-item selected UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="code-tab" data-hotkey="g c" data-ga-click="Repository, Navigation click, Code tab" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /thomasloven/lovelace-card-mod" href="/thomasloven/lovelace-card-mod">
                <svg height="16" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline" class_names="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>

              <span data-content="Code">Code</span>
                
</a>        </li>
        <li class="d-flex">
          <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="issues-tab" data-hotkey="g i" data-ga-click="Repository, Navigation click, Issues tab" data-selected-links="repo_issues repo_labels repo_milestones /thomasloven/lovelace-card-mod/issues" href="/thomasloven/lovelace-card-mod/issues">
                <svg height="16" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline" class_names="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>

              <span data-content="Issues">Issues</span>
                <span class="Counter ">11</span>


</a>        </li>
        <li class="d-flex">
          <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="pull-requests-tab" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-selected-links="repo_pulls checks /thomasloven/lovelace-card-mod/pulls" href="/thomasloven/lovelace-card-mod/pulls">
                <svg height="16" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline" class_names="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>

              <span data-content="Pull requests">Pull requests</span>
                
</a>        </li>
        <li class="d-flex">
          <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="actions-tab" data-hotkey="g w" data-ga-click="Repository, Navigation click, Actions tab" data-selected-links="repo_actions /thomasloven/lovelace-card-mod/actions" href="/thomasloven/lovelace-card-mod/actions">
                <svg height="16" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline" class_names="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path></svg>

              <span data-content="Actions">Actions</span>
                
</a>        </li>
        <li class="d-flex">
          <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="projects-tab" data-hotkey="g b" data-ga-click="Repository, Navigation click, Projects tab" data-selected-links="repo_projects new_repo_project repo_project /thomasloven/lovelace-card-mod/projects" href="/thomasloven/lovelace-card-mod/projects">
                <svg height="16" class="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline" class_names="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>

              <span data-content="Projects">Projects</span>
                
</a>        </li>
        <li class="d-flex">
          <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="wiki-tab" data-ga-click="Repository, Navigation click, Wikis tab" data-selected-links="repo_wiki /thomasloven/lovelace-card-mod/wiki" href="/thomasloven/lovelace-card-mod/wiki">
                <svg height="16" class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline" class_names="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg>

              <span data-content="Wiki">Wiki</span>
                
</a>        </li>
        <li class="d-flex">
          <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="security-tab" data-hotkey="g s" data-ga-click="Repository, Navigation click, Security tab" data-selected-links="security overview alerts policy token_scanning code_scanning /thomasloven/lovelace-card-mod/security" href="/thomasloven/lovelace-card-mod/security">
                <svg height="16" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline" class_names="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path></svg>

              <span data-content="Security">Security</span>
                <span class="Counter js-security-tab-count " data-url="/thomasloven/lovelace-card-mod/security/overall-count" hidden="hidden">1</span>


</a>        </li>
        <li class="d-flex">
          <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="insights-tab" data-ga-click="Repository, Navigation click, Insights tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /thomasloven/lovelace-card-mod/pulse" href="/thomasloven/lovelace-card-mod/pulse">
                <svg height="16" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline" class_names="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path></svg>

              <span data-content="Insights">Insights</span>
                
</a>        </li>

</ul>
        <div class="position-absolute right-0 pr-3 pr-md-4 pr-lg-5 js-responsive-underlinenav-overflow" style="visibility:hidden;">
      <details class="details-overlay details-reset position-relative">
  <summary role="button">
              <div class="UnderlineNav-item mr-0 border-0">
            <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            <span class="sr-only">More</span>
          </div>

</summary>
            <details-menu class="dropdown-menu dropdown-menu-sw " role="menu">
  
            <ul>
                  <li data-menu-item="code-tab" hidden>
                    <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /thomasloven/lovelace-card-mod" href="/thomasloven/lovelace-card-mod">
                      Code
</a>                  </li>
                  <li data-menu-item="issues-tab" hidden>
                    <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /thomasloven/lovelace-card-mod/issues" href="/thomasloven/lovelace-card-mod/issues">
                      Issues
</a>                  </li>
                  <li data-menu-item="pull-requests-tab" hidden>
                    <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /thomasloven/lovelace-card-mod/pulls" href="/thomasloven/lovelace-card-mod/pulls">
                      Pull requests
</a>                  </li>
                  <li data-menu-item="actions-tab" hidden>
                    <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /thomasloven/lovelace-card-mod/actions" href="/thomasloven/lovelace-card-mod/actions">
                      Actions
</a>                  </li>
                  <li data-menu-item="projects-tab" hidden>
                    <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /thomasloven/lovelace-card-mod/projects" href="/thomasloven/lovelace-card-mod/projects">
                      Projects
</a>                  </li>
                  <li data-menu-item="wiki-tab" hidden>
                    <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /thomasloven/lovelace-card-mod/wiki" href="/thomasloven/lovelace-card-mod/wiki">
                      Wiki
</a>                  </li>
                  <li data-menu-item="security-tab" hidden>
                    <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /thomasloven/lovelace-card-mod/security" href="/thomasloven/lovelace-card-mod/security">
                      Security
</a>                  </li>
                  <li data-menu-item="insights-tab" hidden>
                    <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /thomasloven/lovelace-card-mod/pulse" href="/thomasloven/lovelace-card-mod/pulse">
                      Insights
</a>                  </li>
            </ul>

</details-menu>

</details>
    </div>

</nav>

  </div>


<div class="container-xl clearfix new-discussion-timeline  px-3 px-md-4 px-lg-5">
  <div class="repository-content ">

    
    

  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/thomasloven/lovelace-card-mod/blob/1105f6f1c3f3d91a389f810c96826f0d816e1df5/card-mod.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:5c751460d97ef401bfbbdb08dce254b7 -->
    

    <div class="d-flex flex-items-center flex-shrink-0 pb-3 flex-wrap flex-justify-between flex-md-justify-start">
      
<details class="details-reset details-overlay mr-0 mb-0 " id="branch-select-menu">
  <summary class="btn css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
      <svg height="16" class="octicon octicon-git-branch text-gray" text="gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>

    <i class="d-none d-lg-inline">Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
    <span class="dropdown-caret"></span>
  </summary>

  <details-menu class="SelectMenu SelectMenu--hasFilter" src="/thomasloven/lovelace-card-mod/refs/master/card-mod.js?source_action=show&amp;source_controller=blob" preload>
    <div class="SelectMenu-modal">
      <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
        <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
      </include-fragment>
    </div>
  </details-menu>
</details>

      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal mx-0 mx-md-3 width-full width-md-auto flex-order-1 flex-md-order-none mt-3 mt-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/thomasloven/lovelace-card-mod"><span>lovelace-card-mod</span></a></span></span><span class="separator">/</span><strong class="final-path">card-mod.js</strong>
          <span class="separator">/</span><details class="details-reset details-overlay d-inline" id="jumpto-symbol-select-menu">
  <summary class="btn-link link-gray css-truncate" aria-haspopup="true" data-hotkey="r" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_blob_definitions&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_blob_definitions&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="af072d9a00878f24e7bee546bfc07cf8c6527e2a1cc451f50d0539fed31f9a41">
      <svg class="octicon octicon-code" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
    <span data-menu-button>Jump to</span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu SelectMenu--hasFilter" role="menu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">Code definitions</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="jumpto-symbol-select-menu">
          <svg aria-label="Close menu" class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
        </button>
      </header>
        <div class="SelectMenu-filter">
          <input
            class="SelectMenu-input form-control js-filterable-field"
            id="jumpto-symbols-filter-field"
            type="text"
            autocomplete="off"
            spellcheck="false"
            autofocus
            placeholder="Filter definitions"
            aria-label="Filter definitions">
        </div>
      <div class="SelectMenu-list">
        <div data-filterable-for="jumpto-symbols-filter-field" data-filterable-type="substring">
            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>_connect</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>_disconnect</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>_has_template</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>a</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>connectedCallback</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>d</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>disconnectedCallback</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>e</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>firstUpdated</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>firstUpdated</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>firstUpdated</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>template</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>h</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>t</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>i</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>i</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>n</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>n</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>n</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>n</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>o</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>o</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>p</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>properties</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>r</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>r</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>render</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>renderEntity</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>s</span>
              <span class="flex-auto d-flex flex-justify-end">Class</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>s</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>s</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>setConfig</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>t</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>update</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L5">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>hass</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="091e26929a276b3e04a1016c2710e68b3a9ab032f5dfa92411c66af0045fd921" href="/thomasloven/lovelace-card-mod/blob/master/card-mod.js#L5">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>getCardSize</span>
              <span class="flex-auto d-flex flex-justify-end">Method</span>
</a>        </div>
      </div>
      <footer class="SelectMenu-footer">
        <div class="d-flex flex-justify-between">
          Code navigation index up-to-date
          <svg class="octicon octicon-dot-fill text-green" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path></svg>
        </div>
      </footer>
    </div>
  </details-menu>
</details>

      </h2>
        <a href="/thomasloven/lovelace-card-mod/find/master"
              class="js-pjax-capture-input btn mr-2 d-none d-md-block"
              data-pjax
              data-hotkey="t">
          Go to file
        </a>

        <details class="flex-self-end details-overlay details-reset position-relative" id="blob-more-options-details">
  <summary role="button">
                <span class="btn">
              <svg height="16" class="octicon octicon-kebab-horizontal" aria-label="More options" viewBox="0 0 16 16" version="1.1" width="16" role="img"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>

            </span>

</summary>
              <ul class="dropdown-menu dropdown-menu-sw">
              <li class="d-block d-md-none">
                <a class="dropdown-item d-flex flex-items-baseline" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:190927524,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}" data-hydro-click-hmac="6672db65f4359ebd60457942a7d68477294d81c09396ef1b000ee89a42734181" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/thomasloven/lovelace-card-mod/find/master">
                  <span class="flex-auto">Go to file</span>
                  <span class="text-small text-gray" aria-hidden="true">T</span>
</a>              </li>
              <li data-toggle-for="blob-more-options-details">
                <button type="button" data-toggle-for="jumpto-line-details-dialog" class="btn-link dropdown-item">
                  <span class="d-flex flex-items-baseline">
                    <span class="flex-auto">Go to line</span>
                    <span class="text-small text-gray" aria-hidden="true">L</span>
                  </span>
                </button>
              </li>
              <li data-toggle-for="blob-more-options-details">
                <button type="button" data-toggle-for="jumpto-symbol-select-menu" class="btn-link dropdown-item">
                  <span class="d-flex flex-items-baseline">
                    <span class="flex-auto">Go to definition</span>
                    <span class="text-small text-gray" aria-hidden="true">R</span>
                  </span>
                </button>
              </li>
              <li class="dropdown-divider" role="none"></li>
              <li>
                <clipboard-copy value="card-mod.js" class="dropdown-item cursor-pointer" data-toggle-for="blob-more-options-details">
                  Copy path
                </clipboard-copy>
              </li>
            </ul>

</details>
    </div>



    <div class="Box d-flex flex-column flex-shrink-0 mb-3">
      
  <div class="Box-header Box-header--blue Details js-details-container">
        <div class="d-flex flex-items-center">
          <span class="flex-shrink-0 ml-n1 mr-n1 mt-n1 mb-n1">
            <a rel="author" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/users/thomasloven/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomasloven"><img class="avatar avatar-user" src="https://avatars0.githubusercontent.com/u/1299821?s=48&amp;v=4" width="24" height="24" alt="@thomasloven" /></a>
          </span>
          <div class="flex-1 d-flex flex-items-center ml-3 min-width-0">
            <div class="css-truncate css-truncate-overflow">
              <a class="text-bold link-gray-dark" rel="author" data-hovercard-type="user" data-hovercard-url="/users/thomasloven/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/thomasloven">thomasloven</a>

                <span>
                  <a data-pjax="true" title="Bump card-tools version." class="link-gray" href="/thomasloven/lovelace-card-mod/commit/1a020c45b27672f58bccb142ed6d79b126dece32">Bump card-tools version.</a>
                </span>
            </div>


            <span class="ml-2">
              <include-fragment accept="text/fragment+html" src="/thomasloven/lovelace-card-mod/commit/1a020c45b27672f58bccb142ed6d79b126dece32/rollup?direction=e" class="d-inline"></include-fragment>
            </span>
          </div>
          <div class="ml-3 d-flex flex-shrink-0 flex-items-center flex-justify-end text-gray no-wrap">
            <span class="d-none d-md-inline">
              <span>Latest commit</span>
              <a class="text-small text-mono link-gray" href="/thomasloven/lovelace-card-mod/commit/1a020c45b27672f58bccb142ed6d79b126dece32" data-pjax>1a020c4</a>
              <span itemprop="dateModified"><relative-time datetime="2020-05-04T20:11:52Z" class="no-wrap">May 4, 2020</relative-time></span>
            </span>

            <a data-pjax href="/thomasloven/lovelace-card-mod/commits/master/card-mod.js" class="ml-3 no-wrap link-gray-dark no-underline">
              <svg height="16" class="octicon octicon-history text-gray" text="gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path></svg>

              <span class="d-none d-sm-inline">
                <strong>History</strong>
              </span>
            </a>
          </div>
        </div>
  </div>

  <div class="Box-body d-flex flex-items-center flex-auto border-bottom-0 flex-wrap" >
    <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-3" id="blob_contributors_box">
      <summary class="link-gray-dark">
          <svg height="16" class="octicon octicon-people text-gray" text="gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>

          <strong>1</strong>
          
          contributor
      </summary>
      <details-dialog
        class="Box Box--overlay d-flex flex-column anim-fade-in fast"
        aria-label="Users who have contributed to this file"
        src="/thomasloven/lovelace-card-mod/contributors-list/master/card-mod.js" preload>
        <div class="Box-header">
          <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
          </button>
          <h3 class="Box-title">
            Users who have contributed to this file
          </h3>
        </div>
        <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
      </details-dialog>
    </details>
  </div>
    </div>






    <div class="Box mt-3 position-relative
      ">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      5 lines (5 sloc)
      <span class="file-info-divider"></span>
    9.86 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/thomasloven/lovelace-card-mod/raw/master/card-mod.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/thomasloven/lovelace-card-mod/blame/master/card-mod.js">Blame</a>
    </div>


    <div>
          <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac"
             href="x-github-client://openRepo/https://github.com/thomasloven/lovelace-card-mod?branch=master&amp;filepath=card-mod.js"
             aria-label="Open this file in GitHub Desktop"
             data-ga-click="Repository, open with desktop">
              <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path></svg>
          </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/thomasloven/lovelace-card-mod/edit/master/card-mod.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="Sd9ViH0rIOuuUtWMQ42C3wj9bJxH/7VyZZ7WNQphnlJmSZ1PcB1gVRkcIX/D/qTW5PTDc2dJTx7Ho8cobK14XQ==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
            </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/thomasloven/lovelace-card-mod/delete/master/card-mod.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="3DZy77/5+58KgeurBvfwrHGamuVaOtjbI3JiTsBLa5lhmaVkLDq7BTTNaBoe2/b/8172JqnEAjggqr7BouQnSA==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
            </button>
</form>    </div>
  </div>
</div>


        <div class="js-notice border-bottom p-2">
          <div class="d-flex rounded-1 code-navigation-banner">
            <div class="col-6 pt-4 pl-4 pb-4">
              <div class="d-flex flex-items-center f6">
                <h3 class="mr-2">Code navigation is available!</h3>
              </div>
              <p class="text-gray pt-2">
                Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository.
                <a href="https://help.github.com/en/articles/navigating-code-on-github">Learn more</a>
              </p>
            </div>
            <div class="col-6 p-2 text-right code-navigation-banner-illo">
              <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-notice-dismiss" action="/settings/dismiss-notice/aleph_code_navigation_banner" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="Yvj9zvF2TvCbG3wTR1oMgZgR5+9ce0EHhRI+KDv364h50BPgnko0TuPg6eThYyvxEwOJUCVNT9KIsTkzoxYkiw==" />
                <button name="button" type="submit" class="btn-link link-gray" aria-label="Dismiss">
                  <svg width="20" height="20" class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
</button></form>            </div>
          </div>
        </div>

      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip>
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>t</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>function</span> <span class=pl-en>n</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>t</span><span class=pl-kos>[</span><span class=pl-s1>o</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-s1>t</span><span class=pl-kos>[</span><span class=pl-s1>o</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>exports</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-s1>t</span><span class=pl-kos>[</span><span class=pl-s1>o</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-c1>i</span>:<span class=pl-s1>o</span><span class=pl-kos>,</span><span class=pl-c1>l</span>:!<span class=pl-c1>1</span><span class=pl-kos>,</span><span class=pl-c1>exports</span>:<span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>e</span><span class=pl-kos>[</span><span class=pl-s1>o</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>.</span><span class=pl-c1>exports</span><span class=pl-kos>,</span><span class=pl-s1>i</span><span class=pl-kos>,</span><span class=pl-s1>i</span><span class=pl-kos>.</span><span class=pl-c1>exports</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>i</span><span class=pl-kos>.</span><span class=pl-c1>l</span><span class=pl-c1>=</span>!<span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-s1>i</span><span class=pl-kos>.</span><span class=pl-c1>exports</span><span class=pl-kos>}</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>m</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>c</span><span class=pl-c1>=</span><span class=pl-s1>t</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>d</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>,</span><span class=pl-s1>o</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>o</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-c1>||</span><span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>enumerable</span>:!<span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>get</span>:<span class=pl-s1>o</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>r</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s>&quot;undefined&quot;</span>!=<span class=pl-k>typeof</span> <span class=pl-v>Symbol</span><span class=pl-c1>&amp;&amp;</span><span class=pl-v>Symbol</span><span class=pl-kos>.</span><span class=pl-c1>toStringTag</span><span class=pl-c1>&amp;&amp;</span><span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-v>Symbol</span><span class=pl-kos>.</span><span class=pl-c1>toStringTag</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>value</span>:<span class=pl-s>&quot;Module&quot;</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s>&quot;__esModule&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>value</span>:!<span class=pl-c1>0</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>t</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-c1>1</span>&amp;<span class=pl-s1>t</span><span class=pl-c1>&amp;&amp;</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-en>n</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-c1>8</span>&amp;<span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-s1>e</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-c1>4</span>&amp;<span class=pl-s1>t</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s>&quot;object&quot;</span><span class=pl-c1>==</span><span class=pl-k>typeof</span> <span class=pl-s1>e</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>__esModule</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-s1>e</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>o</span><span class=pl-c1>=</span><span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>create</span><span class=pl-kos>(</span>null<span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>r</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>,</span><span class=pl-s>&quot;default&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>enumerable</span>:!<span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>value</span>:<span class=pl-s1>e</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-c1>2</span>&amp;<span class=pl-s1>t</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s>&quot;string&quot;</span>!=<span class=pl-k>typeof</span> <span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-k>for</span><span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-k>in</span> <span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>d</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>,</span><span class=pl-s1>i</span><span class=pl-kos>,</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-s1>e</span><span class=pl-kos>[</span><span class=pl-s1>t</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>.</span><span class=pl-en>bind</span><span class=pl-kos>(</span>null<span class=pl-kos>,</span><span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>o</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>n</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>t</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>__esModule</span>?<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>default</span><span class=pl-kos>}</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-s1>e</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>d</span><span class=pl-kos>(</span><span class=pl-s1>t</span><span class=pl-kos>,</span><span class=pl-s>&quot;a&quot;</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>o</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-c1>hasOwnProperty</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>p</span><span class=pl-c1>=</span><span class=pl-s>&quot;&quot;</span><span class=pl-kos>,</span><span class=pl-en>n</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>s</span><span class=pl-c1>=</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>exports</span><span class=pl-c1>=</span><span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>parse</span><span class=pl-kos>(</span><span class=pl-s>&#39;{&quot;name&quot;:&quot;card-mod&quot;,&quot;private&quot;:true,&quot;version&quot;:&quot;1.1.0&quot;,&quot;description&quot;:&quot;&quot;,&quot;scripts&quot;:{&quot;build&quot;:&quot;webpack&quot;,&quot;watch&quot;:&quot;webpack --watch --mode=development&quot;,&quot;update-card-tools&quot;:&quot;npm uninstall card-tools &amp;&amp; npm install thomasloven/lovelace-card-tools&quot;},&quot;keywords&quot;:[],&quot;author&quot;:&quot;Thomas Lovén&quot;,&quot;license&quot;:&quot;MIT&quot;,&quot;devDependencies&quot;:{&quot;webpack&quot;:&quot;^4.43.0&quot;,&quot;webpack-cli&quot;:&quot;^3.3.11&quot;},&quot;dependencies&quot;:{&quot;card-tools&quot;:&quot;github:thomasloven/lovelace-card-tools&quot;}}&#39;</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s>&quot;use strict&quot;</span><span class=pl-kos>;</span><span class=pl-k>function</span> <span class=pl-en>o</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;hc-main&quot;</span><span class=pl-kos>)</span>?<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;hc-main&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>hass</span>:<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;home-assistant&quot;</span><span class=pl-kos>)</span>?<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;home-assistant&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>hass</span>:<span class=pl-k>void</span> <span class=pl-c1>0</span><span class=pl-kos>}</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>r</span><span class=pl-kos>(</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>let</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>fully</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s>&quot;function&quot;</span><span class=pl-c1>==</span><span class=pl-k>typeof</span> <span class=pl-s1>fully</span><span class=pl-kos>.</span><span class=pl-c1>getDeviceId</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-s1>fully</span><span class=pl-kos>.</span><span class=pl-en>getDeviceId</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>localStorage</span><span class=pl-kos>[</span><span class=pl-s>&quot;lovelace-player-device-id&quot;</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-en>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-c1>1e5</span>*<span class=pl-kos>(</span><span class=pl-c1>1</span><span class=pl-c1>+</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>random</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>toString</span><span class=pl-kos>(</span><span class=pl-c1>16</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>substring</span><span class=pl-kos>(</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>localStorage</span><span class=pl-kos>[</span><span class=pl-s>&quot;lovelace-player-device-id&quot;</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s>`<span class=pl-s1><span class=pl-kos>${</span><span class=pl-en>e</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span></span><span class=pl-s1><span class=pl-kos>${</span><span class=pl-en>e</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span></span>-<span class=pl-s1><span class=pl-kos>${</span><span class=pl-en>e</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span></span><span class=pl-s1><span class=pl-kos>${</span><span class=pl-en>e</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span></span>`</span><span class=pl-kos>}</span><span class=pl-k>return</span> <span class=pl-s1>localStorage</span><span class=pl-kos>[</span><span class=pl-s>&quot;lovelace-player-device-id&quot;</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>class</span> <span class=pl-s1>s</span> <span class=pl-k>extends</span> <span class=pl-v>HTMLElement</span><span class=pl-kos>{</span><span class=pl-en>disconnectedCallback</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_disconnect</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-en>connectedCallback</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_connect</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-en>_has_template</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span>!!<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>template</span><span class=pl-kos>.</span><span class=pl-en>includes</span><span class=pl-kos>(</span><span class=pl-s>&quot;{%&quot;</span><span class=pl-kos>)</span><span class=pl-c1>||</span>!!<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>template</span><span class=pl-kos>.</span><span class=pl-en>includes</span><span class=pl-kos>(</span><span class=pl-s>&quot;{{&quot;</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>set</span> <span class=pl-en>template</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-c1>=</span><span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>parse</span><span class=pl-kos>(</span><span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>stringify</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_has_template</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>.</span><span class=pl-c1>entity_ids</span><span class=pl-c1>&amp;&amp;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>.</span><span class=pl-c1>template</span><span class=pl-kos>.</span><span class=pl-en>includes</span><span class=pl-kos>(</span><span class=pl-s>&quot;config.entity&quot;</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>.</span><span class=pl-c1>variables</span><span class=pl-kos>.</span><span class=pl-c1>config</span><span class=pl-c1>&amp;&amp;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>.</span><span class=pl-c1>variables</span><span class=pl-kos>.</span><span class=pl-c1>config</span><span class=pl-kos>.</span><span class=pl-c1>entity</span><span class=pl-c1>&amp;&amp;</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>.</span><span class=pl-c1>entity_ids</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>.</span><span class=pl-c1>variables</span><span class=pl-kos>.</span><span class=pl-c1>config</span><span class=pl-kos>.</span><span class=pl-c1>entity</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_disconnect</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>then</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_connect</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>async</span> <span class=pl-en>_connect</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-c1>&amp;&amp;</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_has_template</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>)</span><span class=pl-c1>||</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>innerHTML</span><span class=pl-c1>=</span><span class=pl-s>`&lt;style&gt;<span class=pl-s1><span class=pl-kos>${</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>.</span><span class=pl-c1>template</span><span class=pl-kos>}</span></span>&lt;/style&gt;`</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_unsubRenderTemplate</span><span class=pl-c1>||</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_unsubRenderTemplate</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>e</span><span class=pl-c1>||</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-en>o</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>connection</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>let</span> <span class=pl-s1>s</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-c1>user</span>:<span class=pl-en>o</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>user</span><span class=pl-kos>.</span><span class=pl-c1>name</span><span class=pl-kos>,</span><span class=pl-c1>browser</span>:<span class=pl-s1>i</span><span class=pl-kos>,</span><span class=pl-c1>hash</span>:<span class=pl-s1>location</span><span class=pl-kos>.</span><span class=pl-c1>hash</span><span class=pl-kos>.</span><span class=pl-en>substr</span><span class=pl-kos>(</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-c1>||</span><span class=pl-s>&quot; &quot;</span><span class=pl-kos>,</span>...<span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>variables</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>r</span><span class=pl-c1>=</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>template</span><span class=pl-kos>,</span><span class=pl-s1>a</span><span class=pl-c1>=</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>entity_ids</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>subscribeMessage</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-k>let</span> <span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>result</span><span class=pl-kos>;</span><span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>replace</span><span class=pl-kos>(</span><span class=pl-pds>/_<span class=pl-cce>\(</span><span class=pl-kos>[</span>^)<span class=pl-kos>]</span><span class=pl-c1>*</span><span class=pl-cce>\)</span>/g</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-c1>=&gt;</span><span class=pl-en>o</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>localize</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>substring</span><span class=pl-kos>(</span><span class=pl-c1>2</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-c1>||</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>type</span>:<span class=pl-s>&quot;render_template&quot;</span><span class=pl-kos>,</span><span class=pl-c1>template</span>:<span class=pl-s1>r</span><span class=pl-kos>,</span><span class=pl-c1>variables</span>:<span class=pl-s1>s</span><span class=pl-kos>,</span><span class=pl-c1>entity_ids</span>:<span class=pl-s1>a</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>(</span>null<span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-c1>=&gt;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>innerHTML</span><span class=pl-c1>=</span><span class=pl-s>`&lt;style&gt;<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>e</span><span class=pl-kos>}</span></span>&lt;/style&gt;`</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_unsubRenderTemplate</span><span class=pl-kos>.</span><span class=pl-en>catch</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>innerHTML</span><span class=pl-c1>=</span><span class=pl-s>`&lt;style&gt;<span class=pl-s1><span class=pl-kos>${</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>.</span><span class=pl-c1>template</span><span class=pl-kos>}</span></span>&lt;/style&gt;`</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_unsubRenderTemplate</span><span class=pl-c1>=</span><span class=pl-k>void</span> <span class=pl-c1>0</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>async</span> <span class=pl-en>_disconnect</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_unsubRenderTemplate</span><span class=pl-kos>)</span><span class=pl-k>try</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-k>await</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_unsubRenderTemplate</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_unsubRenderTemplate</span><span class=pl-c1>=</span><span class=pl-k>void</span> <span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-k>await</span> <span class=pl-s1>e</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>catch</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s>&quot;not_found&quot;</span>!==<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>code</span><span class=pl-kos>)</span><span class=pl-k>throw</span> <span class=pl-s1>e</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s>&quot;card-mod&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>define</span><span class=pl-kos>(</span><span class=pl-s>&quot;card-mod&quot;</span><span class=pl-kos>,</span><span class=pl-s1>s</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>n</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>info</span><span class=pl-kos>(</span><span class=pl-s>`%cCARD-MOD <span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>version</span><span class=pl-kos>}</span></span> IS INSTALLED`</span><span class=pl-kos>,</span><span class=pl-s>&quot;color: green; font-weight: bold&quot;</span><span class=pl-kos>,</span><span class=pl-s>&quot;&quot;</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>function</span> <span class=pl-en>r</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>,</span>n<span class=pl-c1>=</span>null<span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-k>new</span> <span class=pl-v>Event</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>bubbles</span>:!<span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>cancelable</span>:!<span class=pl-c1>1</span><span class=pl-kos>,</span><span class=pl-c1>composed</span>:!<span class=pl-c1>0</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>detail</span><span class=pl-c1>=</span><span class=pl-s1>t</span><span class=pl-c1>||</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>o</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;hc-main&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>e</span>?<span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;hc-lovelace&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-view&quot;</span><span class=pl-kos>)</span><span class=pl-c1>||</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-panel-view&quot;</span><span class=pl-kos>)</span>:<span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;home-assistant&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;home-assistant-main&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;app-drawer-layout partial-panel-resolver&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-c1>||</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;ha-panel-lovelace&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-root&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;ha-app-layout #view&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>firstElementChild</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>o</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-k>const</span> <span class=pl-en>a</span><span class=pl-c1>=</span><span class=pl-k>async</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>,</span><span class=pl-s1>o</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-en>i</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>o</span><span class=pl-c1>&amp;&amp;</span><span class=pl-kos>(</span><span class=pl-s>&quot;string&quot;</span><span class=pl-c1>==</span><span class=pl-k>typeof</span> <span class=pl-s1>e</span>?<span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>&quot; &quot;</span><span class=pl-kos>.</span><span class=pl-en>repeat</span><span class=pl-kos>(</span><span class=pl-c1>2</span>*<span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-c1>+</span><span class=pl-s1>e</span><span class=pl-kos>)</span>:<span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>updateComplete</span><span class=pl-c1>&amp;&amp;</span><span class=pl-k>await</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>updateComplete</span><span class=pl-kos>,</span><span class=pl-s>&quot;string&quot;</span><span class=pl-c1>==</span><span class=pl-k>typeof</span> <span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-s1>o</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;card-mod&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-k>void</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>s</span><span class=pl-c1>=</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&quot;card-mod&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>s</span><span class=pl-kos>.</span><span class=pl-c1>template</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-c1>template</span>:<span class=pl-s1>t</span><span class=pl-kos>,</span><span class=pl-c1>variables</span>:<span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>variables</span><span class=pl-kos>,</span><span class=pl-c1>entity_ids</span>:<span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>entity_ids</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span><span class=pl-s1>s</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-en>i</span><span class=pl-kos>(</span><span class=pl-s>&quot;Applied styles to:&quot;</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-en>i</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>else</span> <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>keys</span><span class=pl-kos>(</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-s1>s</span><span class=pl-c1>=&gt;</span><span class=pl-s>&quot;.&quot;</span><span class=pl-c1>===</span><span class=pl-s1>s</span>?<span class=pl-kos>(</span><span class=pl-en>i</span><span class=pl-kos>(</span><span class=pl-s>&quot;Stepping into root of &quot;</span><span class=pl-c1>+</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>tagName</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-en>a</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>[</span><span class=pl-s1>s</span><span class=pl-kos>]</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>,</span><span class=pl-s1>o</span>?<span class=pl-s1>o</span><span class=pl-c1>+</span><span class=pl-c1>1</span>:<span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>)</span>:<span class=pl-s>&quot;$&quot;</span><span class=pl-c1>===</span><span class=pl-s1>s</span>?<span class=pl-kos>(</span><span class=pl-en>i</span><span class=pl-kos>(</span><span class=pl-s>&quot;Stepping into ShadowRoot of &quot;</span><span class=pl-c1>+</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>tagName</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-en>a</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>[</span><span class=pl-s1>s</span><span class=pl-kos>]</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>,</span><span class=pl-s1>o</span>?<span class=pl-s1>o</span><span class=pl-c1>+</span><span class=pl-c1>1</span>:<span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>)</span>:<span class=pl-kos>(</span><span class=pl-en>i</span><span class=pl-kos>(</span><span class=pl-s>`Searching for: &quot;<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>s</span><span class=pl-kos>}</span></span>&quot;. <span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelectorAll</span><span class=pl-kos>(</span><span class=pl-s1>s</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>}</span></span> matches.`</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-k>void</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelectorAll</span><span class=pl-kos>(</span><span class=pl-s>&quot;&quot;</span><span class=pl-c1>+</span><span class=pl-s1>s</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-en>i</span><span class=pl-kos>(</span><span class=pl-s>&quot;Stepping into &quot;</span><span class=pl-c1>+</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>tagName</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-en>a</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>[</span><span class=pl-s1>s</span><span class=pl-kos>]</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>,</span><span class=pl-s1>o</span>?<span class=pl-s1>o</span><span class=pl-c1>+</span><span class=pl-c1>1</span>:<span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>whenDefined</span><span class=pl-kos>(</span><span class=pl-s>&quot;ha-card&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>then</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s>&quot;ha-card&quot;</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-en>t</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>config</span>?<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>config</span>:<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>_config</span>?<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>_config</span>:<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>host</span>?<span class=pl-en>t</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>host</span><span class=pl-kos>)</span>:<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>parentElement</span>?<span class=pl-en>t</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>parentElement</span><span class=pl-kos>)</span>:<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>parentNode</span>?<span class=pl-en>t</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>parentNode</span><span class=pl-kos>)</span>:null<span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>firstUpdated</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;.card-header&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>e</span><span class=pl-c1>&amp;&amp;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>insertBefore</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>children</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-en>t</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>n</span><span class=pl-c1>||</span>!<span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>)</span><span class=pl-k>return</span><span class=pl-kos>;</span><span class=pl-k>let</span> <span class=pl-s1>o</span><span class=pl-c1>=</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>entity_ids</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-en>i</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-en>a</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>variables</span>:<span class=pl-kos>{</span><span class=pl-c1>config</span>:<span class=pl-s1>n</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-c1>entity_ids</span>:<span class=pl-s1>o</span><span class=pl-kos>}</span><span class=pl-kos>,</span>!!<span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>debug_cardmod</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-en>i</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&quot;location-changed&quot;</span><span class=pl-kos>,</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-en>i</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>r</span><span class=pl-kos>(</span><span class=pl-s>&quot;ll-rebuild&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>whenDefined</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-entities-card&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>then</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-entities-card&quot;</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-c1>renderEntity</span><span class=pl-kos>;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>renderEntity</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-s1>t</span><span class=pl-kos>.</span><span class=pl-en>bind</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>e</span><span class=pl-c1>||</span>!<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-s1>n</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>n</span><span class=pl-c1>||</span>!<span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>values</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-s1>n</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>o</span><span class=pl-c1>=</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>values</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>o</span><span class=pl-c1>||</span>!<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>updateComplete</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-s1>n</span><span class=pl-kos>;</span><span class=pl-k>let</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>entity_ids</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-en>s</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-en>a</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>variables</span>:<span class=pl-kos>{</span><span class=pl-c1>config</span>:<span class=pl-s1>e</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-c1>entity_ids</span>:<span class=pl-s1>i</span><span class=pl-kos>}</span><span class=pl-kos>,</span>!!<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>debug_cardmod</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>updateComplete</span><span class=pl-kos>.</span><span class=pl-en>then</span><span class=pl-kos>(</span><span class=pl-en>s</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>values</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>values</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&quot;ll-rebuild&quot;</span><span class=pl-kos>,</span><span class=pl-en>s</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&quot;location-changed&quot;</span><span class=pl-kos>,</span><span class=pl-en>s</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>r</span><span class=pl-kos>(</span><span class=pl-s>&quot;ll-rebuild&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>whenDefined</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-glance-card&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>then</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-glance-card&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>firstUpdated</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>.</span><span class=pl-en>querySelectorAll</span><span class=pl-kos>(</span><span class=pl-s>&quot;ha-card div.entity&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-s1>t</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>attachShadow</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>mode</span>:<span class=pl-s>&quot;open&quot;</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-kos>[</span>...<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>children</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=&gt;</span><span class=pl-s1>t</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&quot;style&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>t</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>innerHTML</span><span class=pl-c1>=</span><span class=pl-s>&quot;\n      :host {\n        box-sizing: border-box;\n        padding: 0 4px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        cursor: pointer;\n        margin-bottom: 12px;\n        width: var(--glance-column-width, 20%);\n      }\n      div {\n        width: 100%;\n        text-align: center;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .name {\n        min-height: var(--paper-font-body1_-_line-height, 20px);\n      }\n      state-badge {\n        margin: 8px 0;\n      }\n      &quot;</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>o</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>config</span><span class=pl-c1>||</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>entityConf</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>o</span><span class=pl-c1>||</span>!<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>)</span><span class=pl-k>return</span><span class=pl-kos>;</span><span class=pl-k>let</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>entity_ids</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-en>s</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-en>a</span><span class=pl-kos>(</span><span class=pl-s1>t</span><span class=pl-kos>,</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>variables</span>:<span class=pl-kos>{</span><span class=pl-c1>config</span>:<span class=pl-s1>o</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-c1>entity_ids</span>:<span class=pl-s1>i</span><span class=pl-kos>}</span><span class=pl-kos>,</span>!!<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>debug_cardmod</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-en>s</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&quot;location-changed&quot;</span><span class=pl-kos>,</span><span class=pl-en>s</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>r</span><span class=pl-kos>(</span><span class=pl-s>&quot;ll-rebuild&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>whenDefined</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-state-label-badge&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>then</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-state-label-badge&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>firstUpdated</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>e</span><span class=pl-c1>||</span>!<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>)</span><span class=pl-k>return</span><span class=pl-kos>;</span><span class=pl-k>let</span> <span class=pl-s1>t</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>entity_ids</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-en>n</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-en>a</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>variables</span>:<span class=pl-kos>{</span><span class=pl-c1>config</span>:<span class=pl-s1>e</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-c1>entity_ids</span>:<span class=pl-s1>t</span><span class=pl-kos>}</span><span class=pl-kos>,</span>!!<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>debug_cardmod</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-en>n</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&quot;location-changed&quot;</span><span class=pl-kos>,</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-en>n</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>r</span><span class=pl-kos>(</span><span class=pl-s>&quot;ll-rebuild&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>l</span><span class=pl-c1>=</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s>&quot;home-assistant-main&quot;</span><span class=pl-kos>)</span>?<span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>getPrototypeOf</span><span class=pl-kos>(</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s>&quot;home-assistant-main&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span>:<span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>getPrototypeOf</span><span class=pl-kos>(</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-view&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-s1>l</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-c1>html</span><span class=pl-kos>;</span><span class=pl-s1>l</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-c1>css</span><span class=pl-kos>;</span><span class=pl-k>let</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>cardHelpers</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>u</span><span class=pl-c1>=</span><span class=pl-k>new</span> <span class=pl-v>Promise</span><span class=pl-kos>(</span><span class=pl-k>async</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-s1>d</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>e</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-en>n</span><span class=pl-c1>=</span><span class=pl-k>async</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-k>await</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>loadCardHelpers</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>cardHelpers</span><span class=pl-c1>=</span><span class=pl-s1>d</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>loadCardHelpers</span>?<span class=pl-en>n</span><span class=pl-kos>(</span><span class=pl-kos>)</span>:<span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&quot;load&quot;</span><span class=pl-kos>,</span><span class=pl-k>async</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span>!<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-view&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-k>return</span>!<span class=pl-c1>0</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&quot;partial-panel-resolver&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>hass</span><span class=pl-c1>=</span><span class=pl-en>o</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span>!<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>hass</span><span class=pl-c1>||</span>!<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>hass</span><span class=pl-kos>.</span><span class=pl-c1>panels</span><span class=pl-kos>)</span><span class=pl-k>return</span>!<span class=pl-c1>1</span><span class=pl-kos>;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>route</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-c1>path</span>:<span class=pl-s>&quot;/lovelace/&quot;</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>_updateRoutes</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>try</span><span class=pl-kos>{</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;home-assistant&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>catch</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-k>finally</span><span class=pl-kos>{</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;home-assistant&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>removeChild</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-view&quot;</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>loadCardHelpers</span><span class=pl-c1>&amp;&amp;</span><span class=pl-en>n</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>function</span> <span class=pl-en>h</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>const</span> <span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&quot;hui-error-card&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>setConfig</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>type</span>:<span class=pl-s>&quot;error&quot;</span><span class=pl-kos>,</span><span class=pl-c1>error</span>:<span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-c1>origConfig</span>:<span class=pl-s1>t</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>u</span><span class=pl-kos>.</span><span class=pl-en>then</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-en>r</span><span class=pl-kos>(</span><span class=pl-s>&quot;ll-rebuild&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>}</span><span class=pl-k>function</span> <span class=pl-en>p</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>t</span><span class=pl-c1>||</span><span class=pl-s>&quot;object&quot;</span>!=<span class=pl-k>typeof</span> <span class=pl-s1>t</span><span class=pl-c1>||</span>!<span class=pl-s1>t</span><span class=pl-kos>.</span><span class=pl-c1>type</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-en>h</span><span class=pl-kos>(</span><span class=pl-s>`No <span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>e</span><span class=pl-kos>}</span></span> type configured`</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>let</span> <span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-s1>t</span><span class=pl-kos>.</span><span class=pl-c1>type</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>startsWith</span><span class=pl-kos>(</span><span class=pl-s>&quot;custom:&quot;</span><span class=pl-kos>)</span>?<span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>substr</span><span class=pl-kos>(</span><span class=pl-s>&quot;custom:&quot;</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span>:<span class=pl-s>`hui-<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>n</span><span class=pl-kos>}</span></span>-<span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>e</span><span class=pl-kos>}</span></span>`</span><span class=pl-kos>,</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>let</span> <span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>try</span><span class=pl-kos>{</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>setConfig</span><span class=pl-kos>(</span><span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>parse</span><span class=pl-kos>(</span><span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>stringify</span><span class=pl-kos>(</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>catch</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-en>h</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>return</span> <span class=pl-s1>u</span><span class=pl-kos>.</span><span class=pl-en>then</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-en>r</span><span class=pl-kos>(</span><span class=pl-s>&quot;ll-rebuild&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>n</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>o</span><span class=pl-c1>=</span><span class=pl-en>h</span><span class=pl-kos>(</span><span class=pl-s>`Custom element doesn&#39;t exist: <span class=pl-s1><span class=pl-kos>${</span><span class=pl-s1>n</span><span class=pl-kos>}</span></span>.`</span><span class=pl-kos>,</span><span class=pl-s1>t</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>display</span><span class=pl-c1>=</span><span class=pl-s>&quot;None&quot;</span><span class=pl-kos>;</span><span class=pl-k>const</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-en>setTimeout</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>display</span><span class=pl-c1>=</span><span class=pl-s>&quot;&quot;</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-c1>2e3</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>whenDefined</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>then</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>=&gt;</span><span class=pl-kos>{</span><span class=pl-en>clearTimeout</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-en>r</span><span class=pl-kos>(</span><span class=pl-s>&quot;ll-rebuild&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-s1>o</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>o</span><span class=pl-kos>}</span><span class=pl-k>const</span> <span class=pl-s1>m</span><span class=pl-c1>=</span><span class=pl-s>&quot;\nha-card {\n  background: none;\n  box-shadow: none;\n}&quot;</span><span class=pl-kos>;</span><span class=pl-s1>customElements</span><span class=pl-kos>.</span><span class=pl-en>define</span><span class=pl-kos>(</span><span class=pl-s>&quot;mod-card&quot;</span><span class=pl-kos>,</span><span class=pl-k>class</span> <span class=pl-k>extends</span> <span class=pl-s1>l</span><span class=pl-kos>{</span><span class=pl-k>static</span> <span class=pl-k>get</span> <span class=pl-en>properties</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span><span class=pl-kos>{</span><span class=pl-c1>hass</span>:<span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-en>setConfig</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-c1>=</span><span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>parse</span><span class=pl-kos>(</span><span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>stringify</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-k>void</span> <span class=pl-c1>0</span><span class=pl-c1>===</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>style</span>?<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-c1>=</span><span class=pl-s1>m</span>:<span class=pl-s>&quot;string&quot;</span><span class=pl-c1>==</span><span class=pl-k>typeof</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>style</span>?<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-c1>=</span><span class=pl-s1>m</span><span class=pl-c1>+</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>style</span>:<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>[</span><span class=pl-s>&quot;.&quot;</span><span class=pl-kos>]</span>?<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>[</span><span class=pl-s>&quot;.&quot;</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>m</span><span class=pl-c1>+</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>[</span><span class=pl-s>&quot;.&quot;</span><span class=pl-kos>]</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>[</span><span class=pl-s>&quot;.&quot;</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>m</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>card</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-s1>d</span>?<span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>createCardElement</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span>:<span class=pl-en>p</span><span class=pl-kos>(</span><span class=pl-s>&quot;card&quot;</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>.</span><span class=pl-c1>card</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>card</span><span class=pl-kos>.</span><span class=pl-c1>hass</span><span class=pl-c1>=</span><span class=pl-en>o</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-en>render</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-s1>c</span><span class=pl-s>`</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class=pl-s>          &lt;ha-card modcard&gt;</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class=pl-s>          <span class=pl-s1><span class=pl-kos>${</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>card</span><span class=pl-kos>}</span></span></span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class=pl-s>          &lt;/ha-card&gt;</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        `</span><span class=pl-kos>}</span><span class=pl-k>set</span> <span class=pl-en>hass</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>card</span><span class=pl-c1>&amp;&amp;</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>card</span><span class=pl-kos>.</span><span class=pl-c1>hass</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-en>getCardSize</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>.</span><span class=pl-c1>report_size</span><span class=pl-kos>)</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>.</span><span class=pl-c1>report_size</span><span class=pl-kos>;</span><span class=pl-k>let</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowRoot</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>e</span><span class=pl-c1>&amp;&amp;</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;ha-card card-maker&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-c1>&amp;&amp;</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>getCardSize</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-c1>&amp;&amp;</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-c1>||</span><span class=pl-c1>1</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/thomasloven/lovelace-card-mod/blame/1105f6f1c3f3d91a389f810c96826f0d816e1df5/card-mod.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/thomasloven/lovelace-card-mod/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  


  <details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/thomasloven/lovelace-card-mod/find-symbols"
     data-tagsearch-ref="master"
     data-tagsearch-path="card-mod.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:190927524,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/thomasloven/lovelace-card-mod/blob/master/card-mod.js&quot;,&quot;user_id&quot;:17420833}}"
     data-hydro-click-hmac="6858fbba0b26713752172bd8e32531be6f9823e7029d0f432c849609d3f39476">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>




  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-xl width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-WcQmT2vhcClFVOaaAJV/M+HqsJ2Gq/myvl6F3gCVBxykazXTs+i5fvxncSXwyG1CSfcrqmLFw/R/bmFYzprX2A==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-59c4264f.js"></script>
    <script crossorigin="anonymous" integrity="sha512-47cvnR4cfmRA+p1TUeCLY+nCEqD7tni9XPMTW5kLy2C4SUhMCAw0NWiKqvZEM0iZRBw+8u8DgeD30fC56eV02w==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-e3b72f9d.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-o1byON+RANkTByBOBMew607nArjwSW0hKLEJN+XLN1QyX55v9PpTdzWkQbhZ91biZlPQDyqlHsTyR61hShVxYQ==" type="application/javascript" src="https://github.githubassets.com/assets/vendor-a356f238.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-v96znx7UoCTT9x5ExGL602c2pkjISH54Zz3tEp0/+OfmPEvofzbEEEmc1kpAj9FUQ7kCho2vcC7kp3FCGtdCdg==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-bfdeb39f.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-E6CUqpJOtgEPXjm5ftqbh/4xCHSVjf42UXm6M9g3uPI9ZXB8+8PbftomndYgx4BWSaw81+3l/jP1xIlhMWgUlA==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-13a094aa.js"></script>
    
      <script crossorigin="anonymous" async="async" integrity="sha512-4GcSWGoe36+BoWho4gtJcByZe8j43w+lt2/PDe3rmBxRVSgD29YipDwuIywe8fvOd2b2CszBqaPGxSznUtE3Xg==" type="application/javascript" data-module-id="./drag-drop.js" data-src="https://github.githubassets.com/assets/drag-drop-e0671258.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-3Vk1NFIOm+TBUMM6pTA6DCUwwLLnc/QIT8jpENm71InvSU8O4p2plDagpst1tH1l+9jOBnneaXZnAskA9a2b3w==" type="application/javascript" data-module-id="./gist-vendor.js" data-src="https://github.githubassets.com/assets/gist-vendor-dd593534.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-iv+4yAluOjiG50ZypUBIWIUCRDo6JEBf2twvmd5AelxgPQJO/XC1oNMGTMdDfKt30p7G7fHEOTZ2utHWDJ9PPQ==" type="application/javascript" data-module-id="./randomColor.js" data-src="https://github.githubassets.com/assets/randomColor-8affb8c8.js"></script>
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>


  </body>
</html>

