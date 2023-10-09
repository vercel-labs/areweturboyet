export default `

test/development/acceptance-app/component-stack.test.ts
* Component Stack in error overlay should show a component stack on hydration error

test/development/acceptance-app/app-hmr-changes.test.ts
* Error overlay - RSC build errors should handle successive HMR changes with errors correctly

test/development/acceptance-app/error-message-url.test.ts
* Error overlay - error message urls should be possible to click url in build error

test/development/acceptance-app/invalid-imports.test.ts
* Error Overlay invalid imports should show error when using styled-jsx in server component
* Error Overlay invalid imports should show error when external package imports client-only in server component
* Error Overlay invalid imports should show error when external package imports server-only in client component

test/development/acceptance-app/ReactRefreshLogBox-scss.test.ts
* ReactRefreshLogBox app scss syntax errors

test/development/acceptance-app/ReactRefreshLogBox-builtins.test.ts
* ReactRefreshLogBox app turbo Module not found missing global CSS

test/development/acceptance-app/ReactRefreshModule.test.ts
* ReactRefreshModule app should allow any variable names

test/development/acceptance-app/ReactRefreshRegression.test.ts
* ReactRefreshRegression app can fast refresh a page with static generation
* ReactRefreshRegression app shows an overlay for anonymous function server-side error
* ReactRefreshRegression app shows an overlay for server-side error in server component
* ReactRefreshRegression app shows an overlay for server-side error in client component
* ReactRefreshRegression app custom loader mdx should have Fast Refresh enabled

test/development/acceptance-app/editor-links.test.ts
* Error overlay - editor links should be possible to open source file on build error
* Error overlay - editor links should be possible to open import trace files on RSC parse error
* Error overlay - editor links should be possible to open import trace files on module not found error

test/development/acceptance/component-stack.test.ts
* Component Stack in error overlay should show a component stack on hydration error

test/development/acceptance/ReactRefreshLogBox-app-doc.test.ts
* ReactRefreshLogBox turbo _app syntax error shows logbox
* ReactRefreshLogBox turbo _document syntax error shows logbox

test/development/acceptance-app/error-recovery.test.ts
* Error recovery app turbo can recover from a syntax error without losing state
* Error recovery app turbo client component can recover from syntax error
* Error recovery app turbo server component can recover from syntax error
* Error recovery app turbo can recover from a event handler error
* Error recovery app turbo client component can recover from a component error
* Error recovery app turbo server component can recover from a component error
* Error recovery app turbo syntax > runtime error
* Error recovery app turbo stuck error
* Error recovery app turbo render error not shown right after syntax error
* Error recovery app turbo displays build error on initial page load

test/development/acceptance/ReactRefreshLogBox-builtins.test.ts
* ReactRefreshLogBox turbo Module not found (missing global CSS)

test/development/acceptance/error-recovery.test.ts
* ReactRefreshLogBox turbo logbox: can recover from a event handler error
* ReactRefreshLogBox turbo logbox: can recover from a component error
* ReactRefreshLogBox turbo render error not shown right after syntax error
* ReactRefreshLogBox turbo stuck error
* ReactRefreshLogBox turbo syntax > runtime error

test/development/acceptance/ReactRefreshModule.test.ts
* ReactRefreshModule should allow any variable names

test/development/acceptance/ReactRefreshRegression.test.ts
* ReactRefreshRegression shows an overlay for a server-side error
* ReactRefreshRegression custom loader (mdx) should have Fast Refresh enabled

test/development/acceptance/ReactRefreshRequire.test.ts
* ReactRefreshRequire propagates hot update to all inverse dependencies
* ReactRefreshRequire propagates a module that stops accepting in next version

test/development/app-render-error-log/app-render-error-log.test.ts
* app-render-error-log should log the correct values on app-render error
* app-render-error-log should log the correct values on app-render error with edge runtime

test/development/acceptance/server-component-compiler-errors-in-pages.test.ts
* Error Overlay for server components compiler errors in pages importing 'next/headers' in pages
* Error Overlay for server components compiler errors in pages importing 'server-only' in pages

test/development/basic/barrel-optimization.test.ts
* optimizePackageImports app - should render the icons correctly without creating all the modules
* optimizePackageImports pages - should render the icons correctly without creating all the modules
* optimizePackageImports app - should optimize recursive wildcard export mapping
* optimizePackageImports pages - should optimize recursive wildcard export mapping
* optimizePackageImports should support visx

test/development/acceptance-app/ReactRefreshLogBox.test.ts
* ReactRefreshLogBox app turbo unterminated JSX
* ReactRefreshLogBox app turbo conversion to class component (1)
* ReactRefreshLogBox app turbo css syntax errors
* ReactRefreshLogBox app turbo logbox: anchors links in error messages
* ReactRefreshLogBox app turbo Call stack count is correct for server error
* ReactRefreshLogBox app turbo Call stack count is correct for client error

test/development/acceptance/ReactRefreshLogBox.test.ts
* ReactRefreshLogBox turbo unterminated JSX
* ReactRefreshLogBox turbo conversion to class component (1)
* ReactRefreshLogBox turbo css syntax errors
* ReactRefreshLogBox turbo logbox: anchors links in error messages
* ReactRefreshLogBox turbo non-Error errors are handled properly

test/development/basic/next-dynamic.test.ts
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import default behavior should render dynamic import components
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import default behavior should render dynamic import components using a function as first parameter
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import ssr:false option should render the component on client side
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import ssr:true option Should render the component on the server side
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import custom chunkfilename should render the correct filename
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import Multiple modules should only include the rendered module script tag
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import Multiple modules should only load the rendered module in the browser
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import Multiple modules should only render one bundle if component is used multiple times
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import default behavior should render dynamic import components
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import default behavior should render dynamic import components using a function as first parameter
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import ssr:false option should render the component on client side
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import ssr:true option Should render the component on the server side
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import custom chunkfilename should render the correct filename
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import Multiple modules should only include the rendered module script tag
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import Multiple modules should only load the rendered module in the browser
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import Multiple modules should only render one bundle if component is used multiple times
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import default behavior should render dynamic import components
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import default behavior should render dynamic import components using a function as first parameter
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import ssr:false option should render the component on client side
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import ssr:true option Should render the component on the server side
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import custom chunkfilename should render the correct filename
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import Multiple modules should only include the rendered module script tag
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import Multiple modules should only load the rendered module in the browser
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import Multiple modules should only render one bundle if component is used multiple times

test/development/basic/styled-components-disabled.test.ts
* styled-components SWC transform should have hydration mismatch with styled-components transform disabled

test/development/app-hmr/hmr.test.ts
* app-dir-hmr filesystem changes should update server components pages when env files is changed (nodejs)
* app-dir-hmr filesystem changes should update server components pages when env files is changed (edge)

test/development/acceptance-app/rsc-build-errors.test.ts
* Error overlay - RSC build errors should throw an error when getServerSideProps is used
* Error overlay - RSC build errors should throw an error when metadata export is used in client components
* Error overlay - RSC build errors should throw an error when metadata exports are used together in server components
* Error overlay - RSC build errors should throw an error when "use client" is on the top level but after other expressions
* Error overlay - RSC build errors should throw an error when "Component" is imported in server components
* Error overlay - RSC build errors should allow to use and handle rsc poisoning client-only
* Error overlay - RSC build errors should allow to use and handle rsc poisoning server-only
* Error overlay - RSC build errors should throw an error when error file is a server component
* Error overlay - RSC build errors should throw an error when error file is a server component with empty error file
* Error overlay - RSC build errors should freeze parent resolved metadata to avoid mutating in generateMetadata

test/development/basic/hmr.test.ts
* basic HMR, basePath: "" Hot Module Reloading delete a page and add it back should load the page properly
* basic HMR, basePath: "" Error Recovery should recover from 404 after a page has been added
* basic HMR, basePath: "" Error Recovery should recover from 404 after a page has been added with dynamic segments
* basic HMR, basePath: "" Error Recovery should detect syntax errors and recover
* basic HMR, basePath: "" Error Recovery should detect runtime errors on the module scope
* basic HMR, basePath: "" Error Recovery should recover from errors in the render function
* basic HMR, basePath: "" Error Recovery should recover after exporting an invalid page
* basic HMR, basePath: "" Error Recovery should recover after a bad return from the render function
* basic HMR, basePath: "" Error Recovery should recover after undefined exported as default
* basic HMR, basePath: "" Error Recovery should recover after webpack parse error in an imported file
* basic HMR, basePath: "" Error Recovery should recover after loader parse error in an imported file
* basic HMR, basePath: "" Error Recovery should recover from errors in getInitialProps in client
* basic HMR, basePath: "" Error Recovery should recover after an error reported via SSR
* basic HMR, basePath: "" Full reload should warn about full reload in cli output - anonymous page function
* basic HMR, basePath: "" Full reload should warn about full reload in cli output - runtime-error
* basic HMR, basePath: "" should have client HMR events in trace file
* basic HMR, basePath: "" should have correct compile timing after fixing error
* basic HMR, basePath: "/docs" Hot Module Reloading delete a page and add it back should load the page properly
* basic HMR, basePath: "/docs" Error Recovery should recover from 404 after a page has been added
* basic HMR, basePath: "/docs" Error Recovery should recover from 404 after a page has been added with dynamic segments
* basic HMR, basePath: "/docs" Error Recovery should detect syntax errors and recover
* basic HMR, basePath: "/docs" Error Recovery should detect runtime errors on the module scope
* basic HMR, basePath: "/docs" Error Recovery should recover from errors in the render function
* basic HMR, basePath: "/docs" Error Recovery should recover after exporting an invalid page
* basic HMR, basePath: "/docs" Error Recovery should recover after a bad return from the render function
* basic HMR, basePath: "/docs" Error Recovery should recover after undefined exported as default
* basic HMR, basePath: "/docs" Error Recovery should recover after webpack parse error in an imported file
* basic HMR, basePath: "/docs" Error Recovery should recover after loader parse error in an imported file
* basic HMR, basePath: "/docs" Error Recovery should recover from errors in getInitialProps in client
* basic HMR, basePath: "/docs" Error Recovery should recover after an error reported via SSR
* basic HMR, basePath: "/docs" Full reload should warn about full reload in cli output - anonymous page function
* basic HMR, basePath: "/docs" Full reload should warn about full reload in cli output - runtime-error
* basic HMR, basePath: "/docs" should have client HMR events in trace file
* basic HMR, basePath: "/docs" should have correct compile timing after fixing error

test/integration/app-document-import-order/test/index.test.js
* development mode _app chunks should be attached to de dom before page chunks

test/integration/amphtml/test/index.test.js
* AMP Usage AMP dev mode should add data-ampdevmode to development script tags

test/integration/app-dir-export/test/dynamic-missing-gsp-dev.test.ts
* should error when dynamic route is missing generateStaticParams
* should error when client component has generateStaticParams

test/integration/app-dir-export/test/dynamic-missing-gsp-prod.test.ts
* should error when dynamic route is missing generateStaticParams
* should error when client component has generateStaticParams

test/integration/app-dir-export/test/dynamicapiroute-dev.test.ts
* should work in dev with dynamicApiRoute undefined
* should work in dev with dynamicApiRoute 'error'
* should work in dev with dynamicApiRoute 'force-static'
* should work in dev with dynamicApiRoute 'force-dynamic'

test/integration/app-dir-export/test/dynamicapiroute-prod.test.ts
* should work in prod with dynamicApiRoute undefined
* should work in prod with dynamicApiRoute 'error'
* should work in prod with dynamicApiRoute 'force-static'
* should work in prod with dynamicApiRoute 'force-dynamic'

test/integration/app-dir-export/test/dynamicpage-dev.test.ts
* should work in dev with dynamicPage undefined
* should work in dev with dynamicPage 'error'
* should work in dev with dynamicPage 'force-static'

test/integration/app-dir-export/test/dynamicpage-prod.test.ts
* should work in prod with dynamicPage undefined
* should work in prod with dynamicPage $dynamicPage
* should work in prod with dynamicPage 'force-static'
* should work in prod with dynamicPage 'force-dynamic'

test/integration/app-dir-export/test/trailing-slash-dev.test.ts
* should work in dev with trailingSlash 'false'
* should work in dev with trailingSlash 'true'

test/integration/app-dir-export/test/trailing-slash-start.test.ts
* should work in prod with trailingSlash 'false'
* should work in prod with trailingSlash 'true'

test/development/basic/styled-components.test.ts
* styled-components SWC transform should enable the display name transform by default

test/development/next-font/build-errors.test.ts
* build-errors should show a next/font error when input is wrong
* build-errors should show a module not found error if local font file can' be resolved

test/development/next-font/font-loader-in-document-error.test.ts
* font-loader-in-document-error next/font inside _document

test/development/pages-dir/custom-app-hmr/index.test.ts
* custom-app-hmr should not do full reload when simply editing _app.js

test/e2e/app-dir-legacy-edge-runtime-config/index.test.ts
* app-dir edge runtime config should warn the legacy object config export

test/e2e/app-dir/_allow-underscored-root-directory/_allow-underscored-root-directory.test.ts
* _allow-underscored-root-directory should serve app path with %5F

test/development/pages-dir/client-navigation/index.test.ts
* Client Navigation runtime errors should show redbox when a client side error is thrown inside a component
* Client Navigation runtime errors should show redbox when a client side error is thrown outside a component
* Client Navigation Rendering via HTTP error-in-the-global-scope
* Client Navigation Rendering via HTTP should set Cache-Control header

test/e2e/app-dir/actions-navigation/index.test.ts
* app-dir action handling should handle actions correctly after navigation / redirection events
* app-dir action handling should handle actions correctly after following a relative link

test/e2e/app-dir/app-basepath/index.test.ts
* app dir - basepath should prefix metadata og image with basePath

test/development/middleware-errors/index.test.ts
* middleware - development errors when middleware throws synchronously logs the error correctly
* middleware - development errors when running invalid dynamic code with eval logs the error correctly
* middleware - development errors when running invalid dynamic code with eval renders the error correctly and recovers
* middleware - development errors when throwing while loading the module logs the error correctly
* middleware - development errors when throwing while loading the module renders the error correctly and recovers
* middleware - development errors when there is a compilation error from boot logs the error correctly
* middleware - development errors when there is a compilation error from boot renders the error correctly and recovers
* middleware - development errors when there is a compilation error after boot logs the error correctly

test/e2e/app-dir/app-config-crossorigin/index.test.ts
* app dir - crossOrigin config should render correctly with assetPrefix: "/"

test/e2e/app-dir/app-edge/app-edge.test.ts
* app-dir edge SSR should handle edge only routes
* app-dir edge SSR should retrieve cookies in a server component in the edge runtime
* app-dir edge SSR should handle /index routes correctly
* app-dir edge SSR should warn about the re-export of a pages runtime/preferredRegion config
* app-dir edge SSR should handle edge rsc hmr

test/e2e/app-dir/app-external/app-external.test.ts
* app dir - external dependency should be able to opt-out 3rd party packages being bundled in server components
* app dir - external dependency should have proper tree-shaking for known modules in CJS

test/e2e/app-dir/app-middleware/app-middleware.test.ts
* app-dir with middleware should filter correctly after middleware rewrite
* app-dir with middleware Mutate request headers for Serverless Functions Adds new headers
* app-dir with middleware Mutate request headers for Serverless Functions Deletes headers
* app-dir with middleware Mutate request headers for Serverless Functions Updates headers
* app-dir with middleware Mutate request headers for Serverless Functions Supports draft mode
* app-dir with middleware Mutate request headers for Edge Functions Adds new headers
* app-dir with middleware Mutate request headers for Edge Functions Deletes headers
* app-dir with middleware Mutate request headers for Edge Functions Updates headers
* app-dir with middleware Mutate request headers for Edge Functions Supports draft mode
* app-dir with middleware Mutate request headers for next/headers Adds new headers
* app-dir with middleware Mutate request headers for next/headers Deletes headers
* app-dir with middleware Mutate request headers for next/headers Updates headers
* app-dir with middleware Mutate request headers for next/headers Supports draft mode
* app dir - middleware with middleware in src dir works without crashing when using requestAsyncStorage

test/e2e/app-dir/app-css/index.test.ts
* app dir - css css support server layouts should support external css imports
* app dir - css css support special entries should include css imported in loading.js
* app dir - css css support chunks should bundle css resources into chunks
* app dir - css css support should not preload styles twice during HMR
* app dir - css css support should reload @import styles during HMR
* app dir - css css support multiple entries should deduplicate styles on the module level
* app dir - css css support multiple entries should only include the same style once in the flight data
* app dir - css HMR should support HMR for CSS imports in server components
* app dir - css HMR should not create duplicate link tags during HMR
* app dir - css HMR should support HMR with sass/scss

test/e2e/app-dir/actions/app-action-progressive-enhancement.test.ts
* app-dir action progressive enhancement should support formData and redirect without JS
* app-dir action progressive enhancement should support actions from client without JS

test/e2e/app-dir/actions/app-action-form-state.test.ts
* app-dir action useFormState should support submitting form state with JS
* app-dir action useFormState should support submitting form state without JS
* app-dir action useFormState should support hydrating the app from progressively enhanced form request
* app-dir action useFormState should send the action to the provided permalink with form state when JS disabled

test/e2e/app-dir/app-static/app-static-custom-handler.test.ts
* app-dir static/dynamic handling unstable-cache should work in pages/unstable-cache-edge
* app-dir static/dynamic handling should correctly handle statusCode with notFound + ISR
* app-dir static/dynamic handling should honor fetch cache correctly (edge)
* app-dir static/dynamic handling should not cache correctly with POST method request init
* app-dir static/dynamic handling should cache correctly with post method and revalidate edge
* app-dir static/dynamic handling should cache correctly with utf8 encoding edge
* app-dir static/dynamic handling should cache correctly handle JSON body
* app-dir static/dynamic handling should render not found pages correctly and fallback to the default one

test/e2e/app-dir/app-static/app-static.test.ts
* app-dir static/dynamic handling unstable-cache should work in pages/unstable-cache-edge
* app-dir static/dynamic handling should correctly handle statusCode with notFound + ISR
* app-dir static/dynamic handling should honor fetch cache correctly (edge)
* app-dir static/dynamic handling should not cache correctly with POST method request init
* app-dir static/dynamic handling should cache correctly with post method and revalidate edge
* app-dir static/dynamic handling should cache correctly with utf8 encoding edge
* app-dir static/dynamic handling should cache correctly handle JSON body
* app-dir static/dynamic handling should render not found pages correctly and fallback to the default one

test/e2e/app-dir/draft-mode/draft-mode.test.ts
* app dir - draft mode in edge runtime should use initial rand when draft mode is disabled on /with-edge/index
* app dir - draft mode in edge runtime should use initial rand when draft mode is disabled on /with-edge/with-cookies
* app dir - draft mode in edge runtime should genenerate rand when draft mode enabled
* app dir - draft mode in edge runtime should read other cookies when draft mode enabled

test/e2e/app-dir/edge-runtime-node-compatibility/edge-runtime-node-compatibility.test.ts
* edge runtime node compatibility [app] supports node:buffer
* edge runtime node compatibility [pages/api] supports node:buffer

test/e2e/app-dir/emotion-js/index.test.ts
* app dir - emotion-js should render emotion-js css with compiler.emotion option correctly

test/e2e/app-dir/dynamic/dynamic.test.ts
* app dir - next/dynamic should handle ssr: false in pages when appDir is enabled
* app dir - next/dynamic should handle next/dynamic in SSR correctly

test/e2e/app-dir/create-root-layout/create-root-layout.test.ts
* app-dir create root layout page.js root layout in app create root layout
* app-dir create root layout page.js root layout in route group create root layout
* app-dir create root layout page.js find available dir create root layout
* app-dir create root layout page.tsx create root layout

test/e2e/app-dir/interception-middleware-rewrite/interception-middleware-rewrite.test.ts
* interception-middleware-rewrite should support intercepting routes with a middleware rewrite

test/e2e/app-dir/metadata-edge/index.test.ts
* app dir - Metadata API on the Edge runtime should render OpenGraph image meta tag correctly

test/e2e/app-dir/mdx/mdx.test.ts
* mdx without-mdx-rs app directory should work in initial html
* mdx without-mdx-rs app directory should work using browser
* mdx without-mdx-rs app directory should work in initial html with mdx import
* mdx without-mdx-rs app directory should work using browser with mdx import
* mdx without-mdx-rs app directory should allow overriding components
* mdx without-mdx-rs pages directory should work in initial html
* mdx without-mdx-rs pages directory should work using browser
* mdx without-mdx-rs pages directory should work in initial html with mdx import
* mdx without-mdx-rs pages directory should work using browser with mdx import
* mdx without-mdx-rs pages directory should allow overriding components

test/e2e/app-dir/metadata-dynamic-routes/index.test.ts
* app dir - metadata dynamic routes text routes should handle sitemap.[ext] dynamic routes
* app dir - metadata dynamic routes text routes should not throw if client components are imported but not used
* app dir - metadata dynamic routes social image routes should support generate multi sitemaps with generateSitemaps
* app dir - metadata dynamic routes social image routes should support params as argument in dynamic routes
* app dir - metadata dynamic routes social image routes should fill params into routes groups url of static images
* app dir - metadata dynamic routes social image routes should handle custom fonts in both edge and nodejs runtime
* app dir - metadata dynamic routes should generate unique path for image routes under group routes
* app dir - metadata dynamic routes should error when id is missing in generateSitemaps

test/e2e/app-dir/next-font/next-font.test.ts
* app app dir - next-font import values should have correct values at /
* app app dir - next-font import values should have correct values at /client
* app app dir - next-font computed styles should have correct styles at /
* app app dir - next-font computed styles should have correct styles at /client
* app app dir - next-font navigation should not have duplicate preload tags on navigation
* app app dir - next-font Dev errors should recover on font loader error
* app-old app dir - next-font import values should have correct values at /
* app-old app dir - next-font import values should have correct values at /client
* app-old app dir - next-font computed styles should have correct styles at /
* app-old app dir - next-font computed styles should have correct styles at /client
* app-old app dir - next-font navigation should not have duplicate preload tags on navigation
* app-old app dir - next-font Dev errors should recover on font loader error

test/e2e/app-dir/metadata/metadata.test.ts
* app dir - metadata basic should support other basic tags (edge)
* app dir - metadata opengraph should pick up opengraph-image and twitter-image as static metadata files
* app dir - metadata icons should support root level of favicon.ico
* app dir - metadata file based icons should render icon and apple touch icon meta if their images are specified
* app dir - metadata file based icons should not render if image file is not specified
* app dir - metadata file based icons should handle hmr updates to the file icon
* app dir - metadata static routes should have icons as route

test/e2e/app-dir/next-image/next-image-proxy.test.ts
* next-image-proxy loads images without any errors

test/e2e/app-dir/next-image/next-image.test.ts
* app dir - next-image ssr content should render images on / route
* app dir - next-image ssr content should render images on /client route
* app dir - next-image ssr content should render images nested under page dir on /nested route
* app dir - next-image browser content should render images on / route
* app dir - next-image browser content should render images on /client route
* app dir - next-image browser content should render images nested under page dir on /nested route
* app dir - next-image image content should render images on / route
* app dir - next-image image content should render legacy images in edge runtime on /legacy-edge-runtime route

test/e2e/app-dir/not-found/conflict-route/index.test.ts
* app dir - not-found - conflict route with default runtime should allow to have a valid /not-found route
* app dir - not-found - conflict route with runtime = edge should use the not-found page for non-matching routes
* app dir - not-found - conflict route with runtime = edge should allow to have a valid /not-found route

test/e2e/app-dir/not-found/group-route/index.test.ts
* app dir - not-found - group route with runtime = edge should use the not-found page under group routes

test/e2e/app-dir/not-found-default/index.test.ts
* app dir - not found with default 404 page should render default 404 with root layout for non-existent page
* app dir - not found with default 404 page should be able to navigate to page calling not-found
* app dir - not found with default 404 page should be able to navigate to page with calling not-found in metadata
* app dir - not found with default 404 page should render default not found for group routes if not found is not defined

test/e2e/app-dir/parallel-routes-not-found/parallel-routes-not-found.test.ts
* parallel-routes-and-interception should not render the @children slot when the @slot is not found

test/e2e/app-dir/not-found/basic/index.test.ts
* app dir - not-found - basic with default runtime should render the 404 page when the file is removed, and restore the page when re-added
* app dir - not-found - basic with runtime = edge should use the not-found page for non-matching routes
* app dir - not-found - basic with runtime = edge should match dynamic route not-found boundary correctly
* app dir - not-found - basic with runtime = edge should escalate notFound to parent layout if no not-found boundary present in current layer
* app dir - not-found - basic with runtime = edge should not reload the page
* app dir - not-found - basic with runtime = edge should render the 404 page when the file is removed, and restore the page when re-added

test/e2e/app-dir/app/index.test.ts
* app dir - basic should work for catch-all edge page
* app dir - basic should encode chunk path correctly
* app dir - basic should not share edge workers
* app dir - basic should use text/x-component for flight with edge runtime
* app dir - basic should return the \`vary\` header from edge runtime
* app dir - basic should pass props from getServerSideProps in root layout
* app dir - basic should serve from app
* app dir - basic should serve polyfills for browsers that do not support modules
* app dir - basic should serve nested parent
* app dir - basic should serve dynamic parameter
* app dir - basic should include document html and body
* app dir - basic rewrites should support rewrites on initial load
* app dir - basic rewrites should support rewrites on client-side navigation from pages to app with existing pages path
* app dir - basic rewrites should support rewrites on client-side navigation
* app dir - basic <Link /> should hard push
* app dir - basic <Link /> should hard replace
* app dir - basic <Link /> should soft push
* app dir - basic <Link /> should be soft for back navigation
* app dir - basic <Link /> should be soft for forward navigation
* app dir - basic <Link /> should navigate to pages dynamic route from pages page if it overlaps with an app page
* app dir - basic server components Loading should render loading.js in initial html for slow page
* app dir - basic server components Loading should render loading.js in browser for slow page
* app dir - basic HMR should HMR correctly for server component
* app dir - basic HMR should HMR correctly for client component
* app dir - basic bootstrap scripts should fail to bootstrap when using CSP in Dev due to eval

test/e2e/app-dir/root-layout/root-layout.test.ts
* app-dir root layout Should do a mpa navigation when switching root layout should work with route groups
* app-dir root layout Should do a mpa navigation when switching root layout should work with parallel routes
* app-dir root layout Should do a mpa navigation when switching root layout should work with dynamic routes

test/e2e/404-page-router/index.test.ts
* 404-page-router 404-page-router with basePath of false and i18n of true and middleware false for /not/a/real/page?with=query should have the correct router parameters after it is ready
* 404-page-router 404-page-router with basePath of false and i18n of true and middleware false for /not/a/real/page should have the correct router parameters after it is ready
* 404-page-router 404-page-router with basePath of false and i18n of true and middleware false should not throw any errors when re-fetching the route info
* 404-page-router 404-page-router with basePath of true and i18n of false and middleware false for /not/a/real/page?with=query should have the correct router parameters after it is ready
* 404-page-router 404-page-router with basePath of true and i18n of false and middleware false for /not/a/real/page should have the correct router parameters after it is ready
* 404-page-router 404-page-router with basePath of true and i18n of false and middleware false should not throw any errors when re-fetching the route info
* 404-page-router 404-page-router with basePath of true and i18n of true and middleware false for /not/a/real/page?with=query should have the correct router parameters after it is ready
* 404-page-router 404-page-router with basePath of true and i18n of true and middleware false for /not/a/real/page should have the correct router parameters after it is ready
* 404-page-router 404-page-router with basePath of true and i18n of true and middleware false should not throw any errors when re-fetching the route info
* 404-page-router 404-page-router with basePath of false and i18n of false and middleware false for /not/a/real/page?with=query should have the correct router parameters after it is ready
* 404-page-router 404-page-router with basePath of false and i18n of false and middleware false for /not/a/real/page should have the correct router parameters after it is ready
* 404-page-router 404-page-router with basePath of false and i18n of false and middleware false should not throw any errors when re-fetching the route info

test/e2e/app-dir/actions/app-action.test.ts
* app-dir action handling should handle basic actions correctly
* app-dir action handling should support headers in client imported actions
* app-dir action handling should support formData and redirect
* app-dir action handling should support .bind
* app-dir action handling should support chained .bind
* app-dir action handling should support notFound (javascript disabled)
* app-dir action handling should support notFound
* app-dir action handling should support uploading files
* app-dir action handling should support importing actions in client components
* app-dir action handling should support importing the same action module instance in both server and action layers
* app-dir action handling should not block navigation events while a server action is in flight
* app-dir action handling should support next/dynamic with ssr: false
* app-dir action handling should only submit action once when resubmitting an action after navigation
* app-dir action handling HMR should support updating the action
* app-dir action handling should bundle external libraries if they are on the action layer
* app-dir action handling Edge SSR should handle basic actions correctly
* app-dir action handling Edge SSR should return error response for hoc auth wrappers in edge runtime
* app-dir action handling Edge SSR should handle redirect to a relative URL in a single pass
* app-dir action handling Edge SSR should handle regular redirects
* app-dir action handling Edge SSR should allow cookie and header async storages
* app-dir action handling Edge SSR should handle unicode search params
* app-dir action handling fetch actions should handle redirect to a relative URL in a single pass
* app-dir action handling fetch actions should handle regular redirects
* app-dir action handling fetch actions should store revalidation data in the prefetch cache

test/e2e/app-dir/parallel-routes-and-interception/parallel-routes-and-interception.test.ts
* parallel-routes-and-interception parallel routes should support parallel route tab bars
* parallel-routes-and-interception parallel routes should match parallel routes in route groups
* parallel-routes-and-interception parallel routes should throw an error when a route groups causes a conflict with a parallel segment
* parallel-routes-and-interception parallel routes should throw a 404 when no matching parallel route is found
* parallel-routes-and-interception parallel routes should support layout files in parallel routes
* parallel-routes-and-interception parallel routes should only scroll to the parallel route that was navigated to
* parallel-routes-and-interception parallel routes should navigate with a link with prefetch=false
* parallel-routes-and-interception parallel routes should display all parallel route params with useParams
* parallel-routes-and-interception parallel routes should support parallel routes with no page component
* parallel-routes-and-interception parallel routes should support nested parallel routes
* parallel-routes-and-interception route intercepting should render an intercepted route from a slot
* parallel-routes-and-interception route intercepting should render an intercepted route at the top level from a nested path
* parallel-routes-and-interception route intercepting should render modal when paired with parallel routes
* parallel-routes-and-interception route intercepting should support intercepting with beforeFiles rewrites

test/integration/async-modules/test/index.test.js
* Async modules dev mode ssr async page modules
* Async modules dev mode csr async page modules
* Async modules dev mode works on async api routes
* Async modules dev mode works with getServerSideProps
* Async modules dev mode works with getStaticProps
* Async modules dev mode can render async 404 pages

test/integration/broken-webpack-plugin/test/index.test.js
* Handles a broken webpack plugin (precompile) should render error correctly

test/integration/build-indicator/test/index.test.js
* Build Activity Indicator Enabled Shows the build indicator when a page is built during navigation

test/integration/cli/test/index.test.js
* CLI Usage dev -p conflict
* CLI Usage dev -p reserved

test/integration/config-devtool-dev/test/index.test.js
* devtool set in development mode in next config should warn and revert when a devtool is set in development mode

test/e2e/app-dir/set-cookies/set-cookies.test.ts
* set-cookies for edge runtime for /pages should set two set-cookie headers
* set-cookies for experimental-edge runtime for /pages should set two set-cookie headers

test/e2e/app-dir/underscore-ignore-app-paths/underscore-ignore-app-paths.test.ts
* underscore-ignore-app-paths should serve app path with %5F

test/e2e/browserslist/browserslist.test.ts
* Browserslist should apply browserslist target

test/e2e/basepath.test.ts
* basePath should have correct href for a link
* basePath should have correct href for a link to /

test/e2e/app-dir/server-actions-relative-redirect/server-actions-relative-redirect.test.ts
* server-actions-relative-redirect should work with relative redirect
* server-actions-relative-redirect should work with absolute redirect

test/e2e/custom-app-render/custom-app-render.test.ts
* custom-app-render should render /
* custom-app-render should render /render

test/e2e/edge-compiler-can-import-blob-assets/index.test.ts
* Edge Compiler can import asset assets allows to fetch text assets
* Edge Compiler can import asset assets allows to fetch image assets
* Edge Compiler can import asset assets allows to assets from node_modules
* Edge Compiler can import asset assets extracts all the assets from the bundle

test/e2e/edge-can-use-wasm-files/index.test.ts
* edge api endpoints can use wasm files uses the wasm file
* middleware can use wasm files uses the wasm file
* middleware can use wasm files can be called twice
* middleware can use wasm files lists the necessary wasm bindings in the manifest
* middleware can use wasm files with the experimental modes on uses the wasm file

test/e2e/conflicting-app-page-error/index.test.ts
* Conflict between app file and pages file should show error overlay for /another
* Conflict between app file and pages file should show error overlay for /
* Conflict between app file and pages file should support hmr with conflicts
* Conflict between app file and pages file should error again when there is new conflict

test/e2e/edge-pages-support/edge-document.test.ts
* edge render - custom _document with edge runtime should render page properly

test/e2e/edge-pages-support/index.test.ts
* edge-render-getserversideprops should have correct query/params on index
* edge-render-getserversideprops should have correct query/params on /[id]
* edge-render-getserversideprops should have correct query/params on rewrite
* edge-render-getserversideprops should have correct query/params on dynamic rewrite
* edge-render-getserversideprops should respond to _next/data for index correctly
* edge-render-getserversideprops should respond to _next/data for [id] correctly

test/e2e/edge-runtime-uses-edge-light-import-specifier-for-packages/edge-runtime-uses-edge-light-import-specifier-for-packages.test.ts
* edge-runtime uses edge-light import specifier for packages pages/api endpoints import the correct module
* edge-runtime uses edge-light import specifier for packages pages import the correct module
* edge-runtime uses edge-light import specifier for packages app-dir imports the correct module

test/e2e/edge-configurable-runtime/index.test.ts
* Configurable runtime for src/pages and API routes In dev mode warns about API route using experimental-edge runtime
* Configurable runtime for src/pages and API routes In dev mode warns about page using edge runtime
* Configurable runtime for src/pages and API routes In dev mode errors about page using edge runtime
* Configurable runtime for pages and API routes In dev mode warns about API route using experimental-edge runtime
* Configurable runtime for pages and API routes In dev mode warns about page using edge runtime
* Configurable runtime for pages and API routes In dev mode errors about page using edge runtime

test/e2e/fetch-failures-have-good-stack-traces-in-edge-runtime/fetch-failures-have-good-stack-traces-in-edge-runtime.test.ts
* fetch failures have good stack traces in edge runtime when awaiting \`fetch\` using an unknown domain, stack traces are preserved
* fetch failures have good stack traces in edge runtime when returning \`fetch\` using an unknown domain, stack traces are preserved

test/e2e/i18n-ignore-rewrite-source-locale/rewrites-with-basepath.test.ts
* i18n-ignore-rewrite-source-locale with basepath get _next/static/ files by skipping locale in rewrite, locale: 
* i18n-ignore-rewrite-source-locale with basepath get _next/static/ files by skipping locale in rewrite, locale: /en
* i18n-ignore-rewrite-source-locale with basepath get _next/static/ files by skipping locale in rewrite, locale: /sv
* i18n-ignore-rewrite-source-locale with basepath get _next/static/ files by skipping locale in rewrite, locale: /nl

test/e2e/i18n-ignore-rewrite-source-locale/rewrites.test.ts
* i18n-ignore-rewrite-source-locale get _next/static/ files by skipping locale in rewrite, locale: 
* i18n-ignore-rewrite-source-locale get _next/static/ files by skipping locale in rewrite, locale: /en
* i18n-ignore-rewrite-source-locale get _next/static/ files by skipping locale in rewrite, locale: /sv
* i18n-ignore-rewrite-source-locale get _next/static/ files by skipping locale in rewrite, locale: /nl

test/e2e/middleware-rewrites/test/index.test.ts
* Middleware Rewrite should handle static rewrite from next.config.js correctly
* Middleware Rewrite should have props for afterFiles rewrite to SSG page
* Middleware Rewrite should allow to rewrite to a \`beforeFiles\` rewrite config
* Middleware Rewrite should allow to rewrite to a \`afterFiles\` rewrite config

test/e2e/module-layer/index.test.ts
* module layer no server-only in server targets should render routes marked with restriction marks without errors
* module layer with server-only in server targets should render routes marked with restriction marks without errors

test/e2e/app-dir/with-babel/with-babel.test.ts
* with babel should support babel in app dir

test/e2e/next-font/basepath.test.ts
* next/font/google basepath preload correct files

test/e2e/next-font/google-fetch-error.test.ts
* next/font/google fetch error should use a fallback font in dev

test/e2e/middleware-trailing-slash/test/index.test.ts
* Middleware Runtime trailing slash refreshes the page when middleware changes 
* Middleware Runtime trailing slash should have init header for NextResponse.redirect
* Middleware Runtime trailing slash should have correct query values for rewrite to ssg page
* Middleware Runtime trailing slash should have correct route params for chained rewrite from middleware to config rewrite
* Middleware Runtime trailing slash should have correct route params for rewrite from config dynamic route
* Middleware Runtime trailing slash should have correct route params for rewrite from config non-dynamic route
* Middleware Runtime trailing slash allows shallow linking with middleware

test/e2e/next-font/with-font-declarations-file.test.ts
* next/font/google with-font-declarations-file preload correct files at /inter
* next/font/google with-font-declarations-file preload correct files at /roboto
* next/font/google with-font-declarations-file preload correct files at /local-font

test/e2e/config-schema-check/index.test.ts
* next.config.js schema validating - invalid config should warn the invalid next config

test/e2e/next-font/with-proxy.test.ts
* next/font/google with proxy should use a proxy agent when proxy environment variable is set

test/e2e/next-font/without-preloaded-fonts.test.ts
* next/font/google without-preloaded-fonts without _app without preload
* next/font/google no preloads with _app without preload
* next/font/google no preloads with _app without fonts

test/e2e/next-font/index.test.ts
* next/font app preload page with fonts
* next/font app preload page without fonts
* next/font app preload page with local fonts
* next/font app preload google fonts with multiple weights/styles
* next/font app preload font without preloadable subsets
* next/font app preload font without size adjust
* next/font app Fallback fontfaces google Indie flower
* next/font app-old preload page with fonts
* next/font app-old preload page without fonts
* next/font app-old preload page with local fonts
* next/font app-old preload google fonts with multiple weights/styles
* next/font app-old preload font without preloadable subsets
* next/font app-old preload font without size adjust
* next/font app-old Fallback fontfaces google Indie flower

test/e2e/og-api/index.test.ts
* og-api should work in pages/api
* og-api should work in app route

test/e2e/middleware-general/test/index.test.ts
* Middleware Runtime with i18n refreshes the page when middleware changes 
* Middleware Runtime with i18n should only contain middleware route in dev middleware manifest
* Middleware Runtime with i18n passes search params with rewrites
* Middleware Runtime with i18n should have init header for NextResponse.redirect
* Middleware Runtime with i18n should have correct route params for chained rewrite from middleware to config rewrite
* Middleware Runtime with i18n should have correct route params for rewrite from config dynamic route
* Middleware Runtime with i18n should have correct route params for rewrite from config non-dynamic route
* Middleware Runtime with i18n allows shallow linking with middleware
* Middleware Runtime without i18n refreshes the page when middleware changes 
* Middleware Runtime without i18n passes search params with rewrites
* Middleware Runtime without i18n should have init header for NextResponse.redirect
* Middleware Runtime without i18n should have correct route params for chained rewrite from middleware to config rewrite
* Middleware Runtime without i18n should have correct route params for rewrite from config dynamic route
* Middleware Runtime without i18n should have correct route params for rewrite from config non-dynamic route
* Middleware Runtime without i18n allows shallow linking with middleware

test/e2e/skip-trailing-slash-redirect/index.test.ts
* skip-trailing-slash-redirect pages dir should preserve original trailing slashes to links on client

test/e2e/streaming-ssr/index.test.ts
* streaming SSR with custom next configs should render styled-jsx styles in streaming
* streaming SSR with custom next configs should redirect paths without trailing-slash and render when slash is appended
* streaming SSR with custom next configs should render next/router correctly in edge runtime
* streaming SSR with custom next configs should render multi-byte characters correctly in streaming

test/e2e/switchable-runtime/index.test.ts
* Switchable runtime Switchable runtime (dev) should sort edge SSR routes correctly
* Switchable runtime Switchable runtime (dev) should be able to navigate between edge SSR routes without any errors
* Switchable runtime Switchable runtime (dev) should build /api/hello and /api/edge as an api route with edge runtime
* Switchable runtime Switchable runtime (dev) should be possible to switch between runtimes in pages

test/e2e/prerender.test.ts
* Prerender should not error when rewriting to fallback dynamic SSG page

test/e2e/yarn-pnp/test/with-eslint.test.ts
* yarn PnP should compile and serve the index page correctly with-eslint

test/e2e/yarn-pnp/test/with-mdx.test.ts
* yarn PnP should compile and serve the index page correctly with-mdx

test/e2e/yarn-pnp/test/with-next-sass.test.ts
* yarn PnP should compile and serve the index page correctly with-next-sass

test/e2e/app-dir/rsc-basic/rsc-basic.test.ts
* app dir - rsc basics should create client reference successfully for all file conventions
* app dir - rsc basics should support next/link in server components
* app dir - rsc basics should support webpack loader rules
* app dir - rsc basics react@experimental should opt into the react@experimental when enabling ppr
* app dir - rsc basics react@experimental should opt into the react@experimental when enabling serverActions

test/e2e/swc-warnings/index.test.ts
* swc warnings by default should have warning
* can force swc should not have warning

test/e2e/nonce-head-manager/index.test.ts
* nonce head manager should not re-execute the script when re-rendering
* nonce head manager should not re-execute the script when re-rendering with CSP header

test/e2e/opentelemetry/opentelemetry.test.ts
* opentelemetry app router should handle RSC with fetch
* opentelemetry app router should handle route handlers in app router
* opentelemetry pages should handle getServerSideProps
* opentelemetry pages should handle getStaticProps when fallback: 'blocking'
* opentelemetry pages should handle api routes in pages

test/integration/config-resolve-alias/test/index.test.js
* Invalid resolve alias should show relevant error when webpack resolve alias is wrong

test/integration/custom-page-extension/test/index.test.js
* Custom page extension dev mode should work with normal page
* Custom page extension dev mode should work dynamic page

test/integration/custom-error/test/index.test.js
* Custom _error dev mode 1 should not warn with /_error and /404 when rendering error first

test/integration/css/test/css-modules.test.js
* CSS Modules Composes Ordering Development Mode should have correct color on index page (on hover)
* CSS Modules Composes Ordering Development Mode should have correct color on index page (on nav from index)

test/integration/create-next-app/package-manager.test.ts
* should use Bun as the package manager on supplying --use-bun

test/integration/css/test/dev-css-handling.test.js
* Can hot reload CSS without losing state should update CSS color without remounting <input>

test/integration/custom-routes-i18n/test/index.test.js
* Custom routes i18n dev mode should navigate on the client with rewrites correctly

test/integration/edge-runtime-dynamic-code/test/index.test.js
* Page using eval in dev mode does issue dynamic code evaluation warnings
* Middleware usage of dynamic code evaluation dev mode shows a warning when running code with eval
* Middleware usage of dynamic code evaluation dev mode does not show warning when no code uses eval
* Middleware usage of dynamic code evaluation dev mode shows a warning when running WebAssembly.compile
* Middleware usage of dynamic code evaluation dev mode shows a warning when running WebAssembly.instantiate with a buffer parameter
* Middleware usage of dynamic code evaluation dev mode does not show a warning when running WebAssembly.instantiate with a module parameter
* Edge route usage of dynamic code evaluation dev mode shows a warning when running code with eval
* Edge route usage of dynamic code evaluation dev mode does not show warning when no code uses eval
* Edge route usage of dynamic code evaluation dev mode shows a warning when running WebAssembly.compile
* Edge route usage of dynamic code evaluation dev mode shows a warning when running WebAssembly.instantiate with a buffer parameter
* Edge route usage of dynamic code evaluation dev mode does not show a warning when running WebAssembly.instantiate with a module parameter

test/integration/edge-runtime-configurable-guards/test/index.test.js
* Edge runtime configurable guards Multiple functions with different configurations warns in dev for allowed code
* Edge runtime configurable guards Multiple functions with different configurations warns in dev for unallowed code
* Edge runtime configurable guards Edge API with allowed, used dynamic code still warns in dev at runtime
* Edge runtime configurable guards Middleware with allowed, used dynamic code still warns in dev at runtime
* Edge runtime configurable guards Edge API using lib with allowed, used dynamic code still warns in dev at runtime
* Edge runtime configurable guards Middleware using lib with allowed, used dynamic code still warns in dev at runtime
* Edge runtime configurable guards Edge API using lib with unallowed, used dynamic code warns in dev at runtime
* Edge runtime configurable guards Middleware using lib with unallowed, used dynamic code warns in dev at runtime

test/integration/edge-runtime-with-node.js-apis/test/index.test.ts
* Middleware using Node.js API dev mode throws error when using setImmediate
* Middleware using Node.js API dev mode throws error when using clearImmediate
* Middleware using Node.js API dev mode throws error when using process.cwd
* Middleware using Node.js API dev mode throws error when using process.cpuUsage
* Middleware using Node.js API dev mode throws error when using process.getuid
* Middleware using Node.js API dev mode throws error when using BroadcastChannel
* Middleware using Node.js API dev mode throws error when using ByteLengthQueuingStrategy
* Middleware using Node.js API dev mode throws error when using CompressionStream
* Middleware using Node.js API dev mode throws error when using CountQueuingStrategy
* Middleware using Node.js API dev mode throws error when using DecompressionStream
* Middleware using Node.js API dev mode throws error when using DomException
* Middleware using Node.js API dev mode throws error when using MessageChannel
* Middleware using Node.js API dev mode throws error when using MessageEvent
* Middleware using Node.js API dev mode throws error when using MessagePort
* Middleware using Node.js API dev mode throws error when using ReadableByteStreamController
* Middleware using Node.js API dev mode throws error when using ReadableStreamBYOBRequest
* Middleware using Node.js API dev mode throws error when using ReadableStreamDefaultController
* Middleware using Node.js API dev mode throws error when using TransformStreamDefaultController
* Middleware using Node.js API dev mode throws error when using WritableStreamDefaultController
* Edge route using Node.js API dev mode throws error when using setImmediate
* Edge route using Node.js API dev mode throws error when using clearImmediate
* Edge route using Node.js API dev mode throws error when using process.cwd
* Edge route using Node.js API dev mode throws error when using process.cpuUsage
* Edge route using Node.js API dev mode throws error when using process.getuid
* Edge route using Node.js API dev mode throws error when using BroadcastChannel
* Edge route using Node.js API dev mode throws error when using ByteLengthQueuingStrategy
* Edge route using Node.js API dev mode throws error when using CompressionStream
* Edge route using Node.js API dev mode throws error when using CountQueuingStrategy
* Edge route using Node.js API dev mode throws error when using DecompressionStream
* Edge route using Node.js API dev mode throws error when using DomException
* Edge route using Node.js API dev mode throws error when using MessageChannel
* Edge route using Node.js API dev mode throws error when using MessageEvent
* Edge route using Node.js API dev mode throws error when using MessagePort
* Edge route using Node.js API dev mode throws error when using ReadableByteStreamController
* Edge route using Node.js API dev mode throws error when using ReadableStreamBYOBRequest
* Edge route using Node.js API dev mode throws error when using ReadableStreamDefaultController
* Edge route using Node.js API dev mode throws error when using TransformStreamDefaultController
* Edge route using Node.js API dev mode throws error when using WritableStreamDefaultController

test/integration/dynamic-routing/test/index.test.js
* Dynamic Routing dev mode should resolve dynamic route href for page added later

test/integration/custom-routes/test/index.test.js
* Custom routes dev mode should handle external beforeFiles rewrite correctly
* Custom routes dev mode should handle beforeFiles rewrite to dynamic route correctly
* Custom routes dev mode should handle beforeFiles rewrite to partly dynamic route correctly
* Custom routes dev mode should resolveHref correctly navigating through history
* Custom routes dev mode should parse params correctly for rewrite to auto-export dynamic page
* Custom routes dev mode should provide params correctly for rewrite to auto-export non-dynamic page
* Custom routes dev mode should work with rewrite when only specifying href
* Custom routes dev mode should work with rewrite when only specifying href and ends in dynamic route
* Custom routes dev mode should match has rewrite correctly before files

test/integration/edge-runtime-module-errors/test/index.test.js
* Edge runtime code with imports Edge API dynamically importing node.js module development mode throws unsupported module error in dev at runtime and highlights the faulty line
* Edge runtime code with imports Middleware dynamically importing node.js module development mode throws unsupported module error in dev at runtime and highlights the faulty line
* Edge runtime code with imports Edge API dynamically importing node.js module in a lib development mode throws unsupported module error in dev at runtime and highlights the faulty line
* Edge runtime code with imports Middleware dynamically importing node.js module in a lib development mode throws unsupported module error in dev at runtime and highlights the faulty line
* Edge runtime code with imports Edge API statically importing 3rd party module throws not-found module error in dev at runtime and highlights the faulty line
* Edge runtime code with imports Middleware statically importing 3rd party module throws not-found module error in dev at runtime and highlights the faulty line

test/integration/edge-runtime-module-errors/test/module-imports.test.js
* Edge runtime code with imports Edge API statically importing node.js module throws unsupported module error in dev at runtime and highlights the faulty line
* Edge runtime code with imports Middleware statically importing node.js module throws unsupported module error in dev at runtime and highlights the faulty line
* Edge runtime code with imports Edge API dynamically importing 3rd party module throws not-found module error in dev at runtime and highlights the faulty line
* Edge runtime code with imports Middleware dynamically importing 3rd party module throws not-found module error in dev at runtime and highlights the faulty line
* Edge runtime code with imports Edge API importing unused 3rd party module throws not-found module error in dev at runtime and highlights the faulty line
* Edge runtime code with imports Middleware importing unused 3rd party module throws not-found module error in dev at runtime and highlights the faulty line

test/integration/env-config/test/index.test.js
* Env Config dev mode should inline global values during build
* Env Config dev mode with hot reload should inline global values during build
* Env Config test environment should have process environment override .env
* Env Config test environment should inline global values during build
* Env Config test environment should provide env for SSG
* Env Config test environment should provide env correctly for SSR
* Env Config test environment should load env from .env

test/integration/filesystempublicroutes/test/index.test.js
* FileSystemPublicRoutes should not route to the index page
* FileSystemPublicRoutes should route to exportPathMap defined routes in development
* FileSystemPublicRoutes should still handle /_next routes

test/integration/gssp-redirect-with-rewrites/test/index.test.js
* getServerSideProps redirects should use a client-side navigation for a rewritten URL

test/integration/gssp-redirect/test/index.test.js
* GS(S)P Redirect Support dev mode should apply redirect when fallback GSP page is visited directly (internal normal)

test/integration/i18n-support-index-rewrite/test/index.test.js
* Custom routes i18n support index rewrite dev mode should handle index rewrite on client correctly

test/integration/image-optimizer/test/content-disposition-type.test.ts
* with contentDispositionType attachment dev support with next.config.js should return home page

test/integration/image-optimizer/test/minimum-cache-ttl.test.ts
* with minimumCacheTTL of 5 sec dev support with next.config.js should return home page

test/integration/import-assertion/test/index.test.js
* import-assertion dev should handle json assertions

test/integration/middleware-src/test/index.test.js
* Middleware in src/ folder dev mode loads an runs src middleware

test/integration/image-optimizer/test/sharp.test.ts
* with latest sharp dev support w/o next.config.js should return home page
* with latest sharp dev support w/o next.config.js should not allow svg with application header
* with latest sharp dev support w/o next.config.js should not allow svg with comma header
* with latest sharp dev support w/o next.config.js should not allow svg with uppercase header
* with latest sharp dev support w/o next.config.js should error if the resource isn't a valid image
* with latest sharp dev support w/o next.config.js should error if the image file does not exist
* with latest sharp dev support with next.config.js should return home page
* with latest sharp dev support with next.config.js should not allow svg with application header
* with latest sharp dev support with next.config.js should not allow svg with comma header
* with latest sharp dev support with next.config.js should not allow svg with uppercase header
* with latest sharp dev support with next.config.js should fail when url fails to load an image
* with latest sharp dev support with next.config.js should error if the resource isn't a valid image
* with latest sharp dev support with next.config.js should error if the image file does not exist

test/integration/jsconfig-baseurl/test/index.test.js
* TypeScript Features default behavior should have correct module not found error

test/integration/image-optimizer/test/squoosh.test.ts
* with squoosh dev support w/o next.config.js should return home page
* with squoosh dev support with next.config.js should return home page

test/integration/next-dynamic-lazy-compilation/test/index.test.js
* next/dynamic dev mode should render server value
* next/dynamic dev mode should render dynamic server rendered values before hydration
* next/dynamic dev mode should render dynamic server rendered values on client mount

test/integration/next-dynamic/test/index.test.js
* next/dynamic dev mode should render dynamic server rendered values on client mount

test/integration/next-image-legacy/svgo-webpack/test/index.test.ts
* svgo-webpack with Image Component development mode should print error when invalid Image usage

test/integration/next-image-legacy/asset-prefix/test/index.test.ts
* Image Component assetPrefix Tests dev mode should include assetPrefix when placeholder=blur during next dev

test/integration/next-image-new/asset-prefix/test/index.test.js
* Image Component assetPrefix Tests dev mode should include assetPrefix when placeholder=blur during next dev

test/integration/next-image-new/both-basepath-trailingslash/test/index.test.ts
* Image Component basePath + trailingSlash Tests dev mode should correctly load image src from import

test/integration/next-image-legacy/image-from-node-modules/test/index.test.ts
* Image Component Tests In Dev Mode should apply image config for node_modules

test/integration/next-image-new/loader-config-default-loader-with-file/test/index.test.ts
* Image Loader Config dev mode - component should work with loaderFile config, leaving default image optimization enabled
* Image Loader Config dev mode - getImgProps should work with loaderFile config, leaving default image optimization enabled

test/integration/next-image-legacy/unicode/test/index.test.ts
* Image Component Unicode Image URL dev mode should load static unicode image
* Image Component Unicode Image URL dev mode should load internal unicode image
* Image Component Unicode Image URL dev mode should load external unicode image
* Image Component Unicode Image URL dev mode should load internal image with space
* Image Component Unicode Image URL dev mode should load external image with space

test/integration/next-image-legacy/base-path/test/static.test.ts
* Static Image Component Tests for basePath dev mode Should add a blur placeholder to statically imported jpg
* Static Image Component Tests for basePath dev mode Should add a blur placeholder to statically imported png

test/integration/next-image-new/base-path/test/static.test.js
* Static Image Component Tests for basePath dev mode should have <head> containing <meta name="viewport"> followed by <link rel="preload"> for priority image
* Static Image Component Tests for basePath dev mode should add a blur placeholder a statically imported jpg
* Static Image Component Tests for basePath dev mode should add a blur placeholder a statically imported png

test/integration/next-image-new/invalid-image-import/test/index.test.ts
* Missing Import Image Tests dev mode should show error

test/integration/next-image-new/default/test/index.test.ts
* Image Component Default Tests dev mode should lazy load with placeholder=blur

test/integration/next-image-new/app-dir/test/index.test.ts
* Image Component Default Tests dev mode should lazy load with placeholder=blur

test/integration/next-image-new/image-from-node-modules/test/index.test.ts
* Image Component from node_modules prod mode should apply image config for node_modules
* Image Component from node_modules dev mode should apply image config for node_modules

test/integration/next-image-new/default/test/static.test.ts
* Static Image Component Tests dev mode should have <head> containing <meta name="viewport"> followed by <link rel="preload"> for priority image
* Static Image Component Tests dev mode should add a blur placeholder a statically imported jpg
* Static Image Component Tests dev mode should add a blur placeholder a statically imported png
* Static Image Component Tests dev mode should add a blur placeholder a statically imported png with fill

test/integration/next-image-new/app-dir/test/static.test.ts
* Static Image Component Tests dev mode should have <head> containing <meta name="viewport"> followed by <link rel="preload"> for priority image
* Static Image Component Tests dev mode should add a blur placeholder a statically imported jpg
* Static Image Component Tests dev mode should add a blur placeholder a statically imported png
* Static Image Component Tests dev mode should add a blur placeholder a statically imported png with fill

test/integration/next-image-new/svgo-webpack/test/index.test.ts
* svgo-webpack with Image Component development mode should print error when invalid Image usage

test/integration/next-image-new/loader-config-edge-runtime/test/index.test.ts
* Image Loader Config with Edge Runtime dev mode should add "src" to img1 based on the loader config
* Image Loader Config with Edge Runtime dev mode should add "srcset" to img1 based on the loader config
* Image Loader Config with Edge Runtime dev mode should add "src" to img2 based on the loader prop
* Image Loader Config with Edge Runtime dev mode should add "srcset" to img2 based on the loader prop

test/integration/next-image-new/unicode/test/index.test.ts
* Image Component Unicode Image URL dev mode should load static unicode image
* Image Component Unicode Image URL dev mode should load internal unicode image
* Image Component Unicode Image URL dev mode should load external unicode image
* Image Component Unicode Image URL dev mode should load internal image with space
* Image Component Unicode Image URL dev mode should load external image with space

test/integration/no-duplicate-compile-error/test/index.test.js
* no duplicate compile error output should not show compile error on page refresh

test/integration/page-extensions/test/index.test.js
* Page Extensions should use the default pageExtensions if set to undefined
* Page Extensions should not throw if .d.ts file inside the pages folder

test/integration/next-image-new/loader-config/test/index.test.ts
* Image Loader Config new dev mode - component should work with loaderFile config
* Image Loader Config new dev mode - component should work with loader prop
* Image Loader Config new dev mode - getImgProps should work with loaderFile config
* Image Loader Config new dev mode - getImgProps should work with loader prop

test/integration/react-streaming/test/index.test.js
* streaming dev dev should support streaming for fizz response
* streaming dev dev should not stream to crawlers or google pagerender bot
* streaming dev dev should render fallback if error raised from suspense during streaming

test/integration/relay-graphql-swc-multi-project/test/index.test.js
* Relay Compiler Transform - Multi Project Config dev mode project-a should resolve index page correctly
* Relay Compiler Transform - Multi Project Config dev mode project-b should resolve index page correctly

test/integration/react-18/test/index.test.js
* Basics default setting with react 18 dev should contain dynamicIds in next data for dynamic imports

test/integration/rewrites-has-condition/test/index.test.js
* rewrites has condition dev mode should navigate to a simple rewrite without error
* rewrites has condition dev mode should navigate to a has rewrite without error

test/integration/rewrites-manual-href-as/test/index.test.js
* rewrites manual href/as dev mode should allow manual href/as on index page
* rewrites manual href/as dev mode should allow manual href/as on dynamic page

test/integration/rewrite-with-browser-history/test/index.test.js
* rewrites persist with browser history actions dev mode back-button should go back to rewritten path successfully

test/integration/server-asset-modules/test/index.test.js
* serverside asset modules dev mode should enable reading local files in api routes

test/integration/scroll-forward-restoration/test/index.test.js
* Scroll Restoration Support dev mode should restore the scroll position on navigating forward

test/integration/script-loader/test/index.test.js
* Next.js Script - Primary Strategies - Strict Mode priority beforeInteractive
* Next.js Script - Primary Strategies - Strict Mode priority beforeInteractive - older version

test/integration/scss/test/basic-scss.test.js
* SCSS Support CSS Compilation and Prefixing should compile successfully
* SCSS Support CSS Compilation and Prefixing should've compiled and prefixed
* SCSS Support CSS Compilation and Prefixing should've emitted a source map
* SCSS Support Can hot reload CSS without losing state should update CSS color without remounting <input>
* SCSS Support Has CSS in computed styles in Production should have compiled successfully
* SCSS Support Has CSS in computed styles in Production should've preloaded the CSS file and injected it in <head>

test/integration/scss/test/scss-loader-handling.test.js
* SCSS Support loader handling CSS URL via \`file-loader\` should've emitted expected files
* SCSS Support loader handling CSS URL via file-loader sass partial should've emitted expected files
* SCSS Support loader handling CSS URL via \`file-loader\` and asset prefix (1) should've emitted expected files
* SCSS Support loader handling CSS URL via \`file-loader\` and asset prefix (2) should've emitted expected files
* SCSS Support loader handling Data Urls should've emitted expected files
* SCSS Support loader handling External imports should've emitted expected files

test/integration/route-load-cancel-css/test/index.test.js
* route cancel via CSS should cancel slow page loads on re-navigation

test/integration/server-side-dev-errors/test/index.test.js
* server-side dev errors should show server-side error for gsp page correctly
* server-side dev errors should show server-side error for gssp page correctly
* server-side dev errors should show server-side error for dynamic gssp page correctly
* server-side dev errors should show server-side error for api route correctly
* server-side dev errors should show server-side error for dynamic api route correctly
* server-side dev errors should show server-side error for uncaught rejection correctly
* server-side dev errors should show server-side error for uncaught empty rejection correctly
* server-side dev errors should show server-side error for uncaught exception correctly
* server-side dev errors should show server-side error for uncaught empty exception correctly

test/integration/typescript-external-dir/project/test/index.test.js
* TypeScript Features default behavior should render the page with external TS/TSX dependencies

test/integration/typescript-only-remove-type-imports/test/index.test.js
* TypeScript onlyRemoveTypeImports dev mode should render a normal page correctly
* TypeScript onlyRemoveTypeImports dev mode should render a page with type import correctly

test/integration/typescript-workspaces-paths/packages/www/test/index.test.js
* TypeScript Features default behavior should not resolve to .d.ts files

test/integration/undefined-webpack-config/test/index.test.js
* undefined webpack config error should show in dev mode

test/integration/typescript-paths/test/index.test.js
* typescript paths default behavior should not resolve to .d.ts files
* typescript paths without baseurl default behavior should not resolve to .d.ts files

test/integration/typescript/test/index.test.js
* TypeScript Features default behavior should render the angle bracket type assertions page
* TypeScript Features default behavior should resolve files in correct order

test/integration/worker-webpack5/test/index.test.js
* Web Workers with webpack 5 dev mode should pass on both client and worker

test/integration/telemetry/test/index.test.js
* Telemetry CLI detects isSrcDir dir correctly for \`next build\`
* Telemetry CLI logs completed \`next build\` with warnings
* Telemetry CLI detects tests correctly for \`next build\`

test/integration/telemetry/test/page-features.test.js
* page features telemetry detects --turbo correctly for \`next dev\`

test/integration/url/test/index.test.js
* Handle new URL asset references in next dev should render the /static page
* Handle new URL asset references in next dev should client-render the /static page
* Handle new URL asset references in next dev should render the /ssr page
* Handle new URL asset references in next dev should client-render the /ssr page
* Handle new URL asset references in next dev should render the /ssg page
* Handle new URL asset references in next dev should client-render the /ssg page
* Handle new URL asset references in next dev should respond on size api
* Handle new URL asset references in next dev should respond on basename api

test/integration/trailing-slashes/test/index.test.js
* Trailing slashes dev mode, with basepath, trailingSlash: true /docs/linker?href=/ should navigate to /docs/
* Trailing slashes dev mode, with basepath, trailingSlash: true /docs/linker?href=/ should push route to /docs/
`;
