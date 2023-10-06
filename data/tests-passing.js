export default `

test/integration/404-page-app/test/index.test.js
* 404 Page Support with _app dev mode should not show pages/404 GIP error if _app has GIP

test/integration/404-page-custom-error/test/index.test.js
* Default 404 Page with custom _error dev mode should respond to 404 correctly
* Default 404 Page with custom _error dev mode should render error correctly
* Default 404 Page with custom _error dev mode should render index page normal

test/integration/404-page-ssg/test/index.test.js
* 404 Page Support SSG dev mode should respond to 404 correctly
* 404 Page Support SSG dev mode should render error correctly
* 404 Page Support SSG dev mode should not show an error in the logs for 404 SSG
* 404 Page Support SSG dev mode should render index page normal

test/integration/500-page/test/gsp-gssp.test.js
* gsp-gssp development mode does not show error with getStaticProps in pages/500 dev
* gsp-gssp development mode shows error with getServerSideProps in pages/500 dev

test/integration/api-body-parser/test/index.test.js
* should parse JSON body
* should not throw if request body is already parsed in custom middleware
* should not throw if request's content-type is invalid

test/integration/amphtml-custom-validator/test/index.test.js
* AMP Custom Validator development mode should run in dev mode successfully

test/integration/api-catch-all/test/index.test.js
* API routes dev support should return data when catch-all
* API routes dev support should return redirect when catch-all with index and trailing slash
* API routes dev support should return data when catch-all with index and trailing slash
* API routes dev support should return data when catch-all with index and no trailing slash

test/integration/amphtml-ssg/test/index.test.js
* AMP SSG Support dev mode should load an amp first page correctly
* AMP SSG Support dev mode should load a hybrid amp page without query correctly
* AMP SSG Support dev mode should load dynamic hybrid SSG/AMP page
* AMP SSG Support dev mode should load dynamic hybrid SSG/AMP page with trailing slash
* AMP SSG Support dev mode should load dynamic hybrid SSG/AMP page with query
* AMP SSG Support dev mode should load a hybrid amp page with query correctly

test/integration/404-page/test/index.test.js
* 404 Page Support dev mode should use pages/404
* 404 Page Support dev mode should set correct status code with pages/404
* 404 Page Support dev mode should use pages/404 for .d.ts file
* 404 Page Support dev mode should not error when visited directly
* 404 Page Support dev mode should render _error for a 500 error still
* 404 Page Support dev mode 2 falls back to _error correctly without pages/404
* 404 Page Support dev mode 2 shows error with getInitialProps in pages/404 dev
* 404 Page Support dev mode 2 does not show error with getStaticProps in pages/404 dev
* 404 Page Support dev mode 2 shows error with getServerSideProps in pages/404 dev

test/integration/app-document-import-order/test/index.test.js
* development mode root components should be imported in this order _document > _app > page in order to respect side effects

test/integration/app-config-asset-prefix/test/index.test.js
* App assetPrefix config should render correctly with assetPrefix: "/"

test/integration/app-aspath/test/index.test.js
* App asPath should not have any changes in asPath after a bundle rebuild

test/integration/amphtml/test/index.test.js
* AMP Usage AMP dev no-warn should not warn on valid amp
* AMP Usage AMP dev mode should navigate from non-AMP to AMP without error
* AMP Usage AMP dev mode should detect amp validator warning on invalid amp
* AMP Usage AMP dev mode should not contain missing files warning

test/integration/500-page/test/index.test.js
* 500 Page Support dev mode should use pages/500
* 500 Page Support dev mode should set correct status code with pages/500
* 500 Page Support dev mode should not error when visited directly
* 500 Page Support development mode 2 shows error with getInitialProps in pages/500 dev

test/integration/app-document-remove-hmr/test/index.test.js
* _app removal HMR should HMR when _app is removed
* _app removal HMR should HMR when _document is removed

test/integration/api-support/test/index.test.js
* API routes dev support should handle proxying to self correctly
* API routes dev support should respond from /api/auth/[...nextauth] correctly
* API routes dev support should handle 204 status correctly
* API routes dev support should render page
* API routes dev support should return 404 for undefined path
* API routes dev support should not conflict with /api routes
* API routes dev support should set cors headers when adding cors middleware
* API routes dev support should work with index api
* API routes dev support should return custom error
* API routes dev support should throw Internal Server Error
* API routes dev support should throw Internal Server Error (async)
* API routes dev support should parse JSON body
* API routes dev support should special-case empty JSON body
* API routes dev support should support boolean for JSON in api page
* API routes dev support should support undefined response body
* API routes dev support should support string in JSON response body
* API routes dev support should support null in JSON response body
* API routes dev support should return error with invalid JSON
* API routes dev support should parse bigger body then 1mb
* API routes dev support should support etag spec
* API routes dev support should parse urlencoded body
* API routes dev support should parse body in handler
* API routes dev support should parse body with config
* API routes dev support should show friendly error for invalid redirect
* API routes dev support should show friendly error in case of passing null as first argument redirect
* API routes dev support should redirect with status code 307
* API routes dev support should redirect to login
* API routes dev support should redirect with status code 301
* API routes dev support should return empty query object
* API routes dev support should parse query correctly
* API routes dev support should return empty cookies object
* API routes dev support should return cookies object
* API routes dev support should return 200 on POST on pages
* API routes dev support should return JSON on post on API
* API routes dev support should return data on dynamic route
* API routes dev support should work with dynamic params and search string
* API routes dev support should work with dynamic params and search string like lambda
* API routes dev support should prioritize a non-dynamic page
* API routes dev support should return data on dynamic nested route
* API routes dev support should 404 on optional dynamic api page
* API routes dev support should return data on dynamic optional nested route
* API routes dev support should work with child_process correctly
* API routes dev support should work with nullable payload
* API routes dev support should warn if response body is larger than 4MB
* API routes dev support should not warn if response body is larger than 4MB with responseLimit config = false
* API routes dev support should warn with configured size if response body is larger than configured size
* API routes dev support should compile only server code in development
* API routes dev support should show warning when the API resolves without ending the request in dev mode
* API routes dev support should not show warning when the API resolves and the response is piped
* API routes dev support should show false positive warning if not using externalResolver flag
* API routes dev support should not show warning if using externalResolver flag

test/integration/app-dir-export/test/dynamicpage-dev.test.ts
* should work in dev with dynamicPage 'force-dynamic'

test/integration/app-functional/test/index.test.js
* Document and App should not have any missing key warnings

test/integration/bigint/test/index.test.js
* bigint API route support dev mode should return 200
* bigint API route support dev mode should return the BigInt result text

test/integration/app-tree/test/index.test.js
* AppTree dev mode should provide router context in AppTree on SSR
* AppTree dev mode should provide router context in AppTree on CSR
* AppTree dev mode should pass AppTree to NextPageContext

test/integration/auto-export/test/index.test.js
* Auto Export dev Supports commonjs 1
* Auto Export dev Supports commonjs 2
* Auto Export dev Refreshes query on mount
* Auto Export dev should update asPath after mount
* Auto Export dev should not replace URL with page name while asPath is delayed
* Auto Export dev should not show hydration warning from mismatching asPath
* Auto Export dev should include error link when hydration error does occur

test/integration/catches-missing-getStaticProps/test/index.test.js
* Catches Missing getStaticProps development mode should catch it in dev mode

test/integration/build-indicator/test/index.test.js
* Build Activity Indicator should validate buildActivityPosition config
* Build Activity Indicator Enabled Adds the build indicator container
* Build Activity Indicator Enabled Shows build indicator when page is built from modifying
* Build Activity Indicator Disabled with next.config.js Does not add the build indicator container

test/integration/client-404/test/index.test.js
* Client 404 dev mode Client Navigation 404 should show 404 upon client replacestate should navigate the page
* Client 404 dev mode Client Navigation 404 should hard navigate to URL on failing to load bundle

test/integration/compression/test/index.test.js
* Compression should compress responses by default

test/integration/client-navigation-a11y/test/index.test.js
* Client Navigation accessibility <RouteAnnouncer /> should not have the initial route announced
* Client Navigation accessibility <RouteAnnouncer /> has aria-live="assertive" and role="alert"
* Client Navigation accessibility <RouteAnnouncer /> There is a title but no h1 tag has the innerText equal to the value of document.title
* Client Navigation accessibility <RouteAnnouncer /> There is no title but a h1 tag has the innerText equal to the value of h1
* Client Navigation accessibility <RouteAnnouncer /> There is a title and a h1 tag has the innerText equal to the value of h1
* Client Navigation accessibility <RouteAnnouncer /> There is no title and no h1 tag has the innerText equal to the value of the pathname

test/integration/client-shallow-routing/test/index.test.js
* Client Shallow Routing dev mode should not shallowly navigate back in history when current page was not shallow
* Client Shallow Routing dev mode should not shallowly navigate forwards in history when current page was not shallow

test/integration/config-experimental-warning/test/index.test.js
* Config Experimental Warning should not show warning with default config from function
* Config Experimental Warning should not show warning with config from object
* Config Experimental Warning should show warning with config from object with experimental
* Config Experimental Warning should show warning with config from function with experimental
* Config Experimental Warning should not show warning with default value
* Config Experimental Warning should show warning with config from object with experimental and multiple keys

test/integration/clean-distdir/test/index.test.js
* Cleaning distDir disabled write should not clean up .next before build start

test/integration/config-mjs/test/index.test.js
* Configuration should disable X-Powered-By header support
* Configuration renders server config on the server only
* Configuration renders public config on the server only
* Configuration correctly imports a package that defines \`module\` but no \`main\` in package.json
* Configuration should have config available on the client

test/integration/app-document/test/index.test.js
* Document and App should not have any missing key warnings
* Document and App Rendering via HTTP _document should include required elements in rendered html
* Document and App Rendering via HTTP _document Document.getInitialProps returns html prop representing app shell
* Document and App Rendering via HTTP _document It adds nonces to all scripts and preload links
* Document and App Rendering via HTTP _document It adds crossOrigin to all scripts and preload links
* Document and App Rendering via HTTP _document It renders ctx.renderPage with enhancer correctly
* Document and App Rendering via HTTP _document It renders ctx.renderPage with enhanceComponent correctly
* Document and App Rendering via HTTP _document It renders ctx.renderPage with enhanceApp correctly
* Document and App Rendering via HTTP _document It renders ctx.renderPage with enhanceApp and enhanceComponent correctly
* Document and App Rendering via HTTP _document It adds a timestamp to link tags with preload attribute to invalidate the cache (DEV only)
* Document and App Rendering via HTTP _app It shows a custom tag
* Document and App Rendering via HTTP _app It should share module state with pages
* Document and App Rendering via HTTP _app It should show valid error when thrown in _app getInitialProps
* Document and App Client side should detect the changes to pages/_app.js and display it
* Document and App Client side should keep state between page navigations
* Document and App Client side It should share module state with pages
* Document and App With CSP enabled should load inline script by hash
* Document and App With CSP enabled should load inline script by nonce

test/integration/cli/test/index.test.js
* CLI Usage no command --help
* CLI Usage no command -h
* CLI Usage no command --version
* CLI Usage no command -v
* CLI Usage no command invalid directory
* CLI Usage no command detects command typos
* CLI Usage build --help
* CLI Usage build -h
* CLI Usage build should warn when unknown argument provided
* CLI Usage build should not throw UnhandledPromiseRejectionWarning
* CLI Usage build should exit when SIGINT is signalled
* CLI Usage build should exit when SIGTERM is signalled
* CLI Usage build invalid directory
* CLI Usage dev --help
* CLI Usage dev -h
* CLI Usage dev custom directory
* CLI Usage dev --port
* CLI Usage dev --port 0
* CLI Usage dev PORT=0
* CLI Usage dev NODE_OPTIONS='--inspect'
* CLI Usage dev -p
* CLI Usage dev --hostname
* CLI Usage dev -H
* CLI Usage dev --experimental-https
* CLI Usage dev --experimental-https with provided key/cert
* CLI Usage dev should format IPv6 addresses correctly
* CLI Usage dev should warn when unknown argument provided
* CLI Usage dev should not throw UnhandledPromiseRejectionWarning
* CLI Usage dev should exit when SIGINT is signalled
* CLI Usage dev should exit when SIGTERM is signalled
* CLI Usage dev invalid directory
* CLI Usage export --help
* CLI Usage export -h
* CLI Usage export should warn when unknown argument provided
* CLI Usage export should not throw UnhandledPromiseRejectionWarning
* CLI Usage export invalid directory
* CLI Usage info --help
* CLI Usage info -h
* CLI Usage info should print output
* CLI Usage info should print output with next.config.mjs

packages/font/src/google/find-font-files-in-css.test.ts
* findFontFilesInCss should find all font files and preload requested subsets
* findFontFilesInCss should not return duplicate font files when several variants use the same font file

packages/font/src/google/get-font-axes.test.ts
* getFontAxes errors Setting axes on font without definable axes
* getFontAxes errors Invalid axes value
* getFontAxes errors Invalid value in axes array

packages/font/src/google/sort-fonts-variant-values.test.ts
* sortFontsVariantValues should correctly compare and return result for plain integer values
* sortFontsVariantValues should correctly compare and return result for comma-separated values
* sortFontsVariantValues should sort an array of plain integer values correctly
* sortFontsVariantValues should sort an array of values with comma-separated values correctly

packages/font/src/local/loader.test.ts
* next/font/local loader generated CSS Default CSS
* next/font/local loader generated CSS Weight and style
* next/font/local loader generated CSS Other properties
* next/font/local loader generated CSS Multiple weights default style
* next/font/local loader generated CSS Multiple styles default weight

packages/font/src/google/validate-google-font-function-call.test.ts
* validateFontFunctionCall errors Missing function name
* validateFontFunctionCall errors Unknown font
* validateFontFunctionCall errors Unknown weight
* validateFontFunctionCall errors Missing weight for non variable font
* validateFontFunctionCall errors Unknown style
* validateFontFunctionCall errors Invalid display value
* validateFontFunctionCall errors Variable in weight array
* validateFontFunctionCall errors Invalid subset in call
* validateFontFunctionCall errors Missing subsets in config and call
* validateFontFunctionCall errors Setting axes on non variable font

packages/font/src/google/loader.test.ts
* next/font/google loader URL from options Inter
* next/font/google loader URL from options Inter
* next/font/google loader URL from options Inter
* next/font/google loader URL from options Source_Sans_3
* next/font/google loader URL from options Source_Sans_3
* next/font/google loader URL from options Roboto_Flex
* next/font/google loader URL from options Roboto_Flex
* next/font/google loader URL from options Roboto_Flex
* next/font/google loader URL from options Oooh_Baby
* next/font/google loader URL from options Albert_Sans
* next/font/google loader URL from options Fraunces
* next/font/google loader URL from options Molle
* next/font/google loader URL from options Roboto
* next/font/google loader URL from options Roboto Mono
* next/font/google loader URL from options Fraunces
* next/font/google loader URL from options Poppins
* next/font/google loader URL from options Nabla
* next/font/google loader URL from options Nabla
* next/font/google loader URL from options Ballet

packages/font/src/local/validate-local-font-function-call.test.ts
* validateLocalFontFunctionCall Not using default export
* validateLocalFontFunctionCall Missing src
* validateLocalFontFunctionCall Invalid file extension
* validateLocalFontFunctionCall Invalid display value
* validateLocalFontFunctionCall Invalid declaration
* validateLocalFontFunctionCall Empty src array

packages/font/src/local/pick-font-file-for-fallback-generation.test.ts
* pickFontFileForFallbackGeneration should pick the weight closest to 400
* pickFontFileForFallbackGeneration should pick the thinner weight if both have the same distance to 400
* pickFontFileForFallbackGeneration should pick variable range closest to 400
* pickFontFileForFallbackGeneration should prefer normal style over italic
* pickFontFileForFallbackGeneration should error on invalid weight in array
* pickFontFileForFallbackGeneration Invalid variable weight in array

packages/next/src/build/webpack/loaders/metadata/resolve-route-data.test.ts
* resolveRouteData resolveRobots should resolve robots.txt
* resolveRouteData resolveRobots should error with ts when specify both wildcard userAgent and specific userAgent
* resolveRouteData resolveSitemap should resolve sitemap.xml

packages/next/src/client/components/navigation.test.ts
* next/navigation should be able to construct URLSearchParams from ReadonlyURLSearchParams

packages/next/src/client/components/promise-queue.test.ts
* PromiseQueue should limit the number of concurrent promises
* PromiseQueue should allow bumping a promise to be next in the queue

packages/next/src/build/webpack/plugins/next-types-plugin/index.test.ts
* next-types-plugin should generate correct base import path
* next-types-plugin should generate correct base import path for nx monorepos
* next-types-plugin should generate correct base import path for custom projects

packages/next/src/client/components/redirect.test.ts
* test should throw a redirect error

packages/next/src/client/components/react-dev-overlay/internal/components/hot-linked-text/get-words-and-whitespaces.test.ts
* getWordsAndWhitespaces should return sequences of words and whitespaces

packages/next/src/client/components/router-reducer/apply-router-state-patch-to-tree.test.tsx
* applyRouterStatePatchToTree should apply a patch to the tree

packages/next/src/client/components/router-reducer/compute-changed-path.test.ts
* computeChangedPath should return the correct path

packages/next/src/client/components/router-reducer/create-href-from-url.test.ts
* createHrefFromUrl returns a string
* createHrefFromUrl adds hash
* createHrefFromUrl adds searchParams
* createHrefFromUrl adds pathname
* createHrefFromUrl adds pathname, searchParams, and hash

packages/next/src/client/components/router-reducer/create-initial-router-state.test.tsx
* createInitialRouterState should return the correct initial router state

packages/next/src/client/components/router-reducer/create-router-cache-key.test.ts
* createRouterCacheKey should support string segment
* createRouterCacheKey should support dynamic segment
* createRouterCacheKey should support catch all segment

packages/next/src/client/components/router-reducer/create-record-from-thenable.test.ts
* createRecordFromThenable successful promise
* createRecordFromThenable rejecting promise

packages/next/src/client/components/router-reducer/create-optimistic-tree.test.ts
* createOptimisticTree should create an optimistic tree

packages/next/src/client/components/router-reducer/fill-cache-with-data-property.test.tsx
* fillCacheWithDataProperty should add data property

packages/next/src/client/components/router-reducer/fill-cache-with-new-subtree-data.test.tsx
* fillCacheWithNewSubtreeData should apply subTreeData and head property

packages/next/src/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.test.tsx
* fillLazyItemsTillLeafWithHead should fill lazy items till leaf with head

packages/next/src/client/components/router-reducer/invalidate-cache-below-flight-segmentpath.test.tsx
* invalidateCacheBelowFlightSegmentPath should invalidate cache below flight segment path

packages/next/src/client/components/router-reducer/get-segment-value.test.ts
* getSegmentValue should support string segment
* getSegmentValue should support dynamic segment
* getSegmentValue should support catch all segment

packages/next/src/client/components/router-reducer/invalidate-cache-by-router-state.test.tsx
* invalidateCacheByRouterState should invalidate the cache by router state

packages/next/src/client/components/router-reducer/is-navigating-to-new-root-layout.test.ts
* shouldHardNavigate should return false if there is no new root layout
* shouldHardNavigate should return true if there is a mismatch between the root layouts

packages/next/src/client/components/router-reducer/read-record-value.test.ts
* readRecordValue successful promise
* readRecordValue rejecting promise

packages/next/src/client/components/router-reducer/reducers/find-head-in-cache.test.tsx
* findHeadInCache should find the head

packages/next/src/client/components/router-reducer/reducers/prefetch-reducer.test.tsx
* prefetchReducer should apply navigation
* prefetchReducer should apply navigation (concurrent)

packages/next/src/client/components/router-reducer/reducers/refresh-reducer.test.tsx
* refreshReducer should apply refresh
* refreshReducer should apply refresh (concurrent)
* refreshReducer should invalidate all segments (concurrent)
* refreshReducer should invalidate prefetchCache (concurrent)

packages/next/src/client/components/router-reducer/reducers/navigate-reducer.test.tsx
* navigateReducer should apply navigation
* navigateReducer should apply navigation when called twice (concurrent)
* navigateReducer should apply navigation for external url (push)
* navigateReducer should apply navigation for external url (replace)
* navigateReducer should apply navigation for forceOptimisticNavigation
* navigateReducer should apply navigation for scroll
* navigateReducer should apply navigation with prefetched data
* navigateReducer should apply parallel routes navigation (concurrent)
* navigateReducer should apply navigation for hash fragments within the same tree
* navigateReducer should apply navigation for hash fragments within a different tree

packages/next/src/client/components/router-reducer/reducers/restore-reducer.test.tsx
* serverPatchReducer should apply server patch
* serverPatchReducer should apply server patch (concurrent)

packages/next/src/client/components/router-reducer/reducers/server-patch-reducer.test.tsx
* serverPatchReducer should apply server patch
* serverPatchReducer should apply server patch (concurrent)
* serverPatchReducer should apply server patch without affecting focusAndScrollRef

packages/next/src/client/components/router-reducer/should-hard-navigate.test.tsx
* shouldHardNavigate should return false if the segments match
* shouldHardNavigate should return false if segments are dynamic and match
* shouldHardNavigate should return true if segments are dynamic and mismatch

packages/next/src/lib/format-server-error.test.ts
* formatServerError should not append message several times

packages/next/src/lib/batcher.test.ts
* Batcher batch should execute the work function immediately
* Batcher batch should batch multiple calls to the same key
* Batcher batch should not batch calls to different keys
* Batcher batch should use the cacheKeyFn to generate cache keys
* Batcher batch should use the schedulerFn to schedule work

packages/next/src/lib/metadata/resolvers/resolve-opengraph.test.ts
* resolveImages should resolve images
* resolveImages should not mutate passed images
* resolveImages should filter out invalid images

packages/next/src/lib/metadata/resolve-metadata.test.ts
* accumulateMetadata typing should support both sync and async metadata
* accumulateMetadata title should merge title with page title
* accumulateMetadata title should merge title with parent layout 
* accumulateMetadata icon should resolve icons.icon correctly
* accumulateMetadata icon should resolve icons.apple
* accumulateMetadata itunes should resolve relative url starting with ./ with pathname for itunes.appArgument
* accumulateMetadata openGraph and twitter should convert string or URL images field to array, not only for basic og type
* accumulateMetadata openGraph and twitter should fill twitter with partial existing openGraph metadata
* accumulateMetadata openGraph and twitter should fill only the existing props from openGraph to twitter
* accumulateMetadata openGraph and twitter should resolve relative url starting with ./ with pathname for openGraph.url
* accumulateMetadata openGraph and twitter should override openGraph or twitter images when current layer specifies social images properties
* accumulateMetadata themeColor should support string theme color
* accumulateMetadata themeColor should support theme color descriptors
* accumulateMetadata viewport should support string viewport
* accumulateMetadata viewport should support viewport descriptors
* accumulateMetadata alternate should support string alternate
* accumulateMetadata alternate should support alternate descriptors

packages/next/src/lib/metadata/resolvers/resolve-title.test.ts
* resolveTitle should resolve nullable template as empty string title
* resolveTitle should resolve title with template

packages/next/src/lib/metadata/resolvers/resolve-url.test.ts
* metadata: resolveUrl should return null when url is falsy
* metadata: resolveUrl should return url itself when metadataBase is null or url is valid URL
* metadata: resolveUrl should compose with metadataBase when url is relative or absolute
* metadata: resolveUrl should ignore metadataBase when url is valid URL

packages/next/src/server/dev/parse-version-info.test.ts
* parse version info installed: 12.0.0, latest: 13.1.1, canary: 13.0.1-canary.0 yields stale-major
* parse version info installed: 13.0.0, latest: 13.1.0, canary: 13.1.1-canary.0 yields stale-minor
* parse version info installed: 13.1.1, latest: 13.1.2, canary: 13.1.3-canary.0 yields stale-patch
* parse version info installed: 13.0.1-canary.0, latest: 13.0.0, canary: 13.0.1-canary.1 yields stale-prerelease
* parse version info installed: 13.0.1-canary.0, latest: 13.0.0, canary: 13.1.0-canary.0 yields stale-prerelease
* parse version info installed: 13.1.0, latest: 13.1.0, canary: 13.1.1-canary.0 yields fresh
* parse version info installed: 13.1.1-canary.7, latest: 13.1.0, canary: 13.1.1-canary.7 yields fresh
* parse version info installed: 13.0.0, latest: 12.0.0, canary: 12.0.1-canary.0 yields newer-than-npm
* parse version info installed: 13.0.1-canary.8, latest: 13.0.0, canary: 13.0.1-canary.7 yields newer-than-npm
* parse version info installed: 13.0.0, latest: 13.1.0, canary: invalid yields unknown
* parse version info installed: 13.0.0, latest: invalid, canary: 13.0.1-canary.0 yields unknown
* parse version info installed: invalid, latest: 13.0.1, canary: 13.0.1-canary.0 yields unknown

packages/next/src/server/app-render/types.test.ts
* flightRouterStateSchema should validate a correct flight router state
* flightRouterStateSchema should not validate an incorrect flight router state

packages/next/src/server/future/helpers/i18n-provider.test.ts
* I18NProvider detectDomainLocale for domain example.com
* I18NProvider detectDomainLocale for domain example.fr
* I18NProvider detectDomainLocale for domain example.de
* I18NProvider detectDomainLocale for domain example.ca
* I18NProvider should detect the correct domain locale
* I18NProvider analyze for pathname / and defaultLocale en
* I18NProvider analyze for pathname /another/page and defaultLocale en
* I18NProvider analyze for pathname /en and defaultLocale en
* I18NProvider analyze for pathname /fr and defaultLocale en
* I18NProvider analyze for pathname /en-CA and defaultLocale en
* I18NProvider analyze for pathname /en/another/page and defaultLocale en
* I18NProvider analyze for pathname /fr/another/page and defaultLocale en
* I18NProvider analyze for pathname /en-CA/another/page and defaultLocale en

packages/next/src/server/future/helpers/interception-routes.test.ts
* Interception Route helper isInterceptionRouteAppPath should validate correct paths
* Interception Route helper isInterceptionRouteAppPath should not validate incorrect paths
* Interception Route helper extractInterceptionRouteInformation should extract correct information
* Interception Route helper extractInterceptionRouteInformation should not extract incorrect information
* Interception Route helper extractInterceptionRouteInformation should check the segment length

packages/next/src/server/future/normalizers/absolute-filename-normalizer.test.ts
* AbsoluteFilenameNormalizer normalizes '<root>/app/basic/(grouped)/endpoint/nested/route.ts' to '/basic/(grouped)/endpoint/nested/route'
* AbsoluteFilenameNormalizer normalizes '<root>/pages/basic/endpoint/nested.ts' to '/basic/endpoint/nested'
* AbsoluteFilenameNormalizer normalizes '<root>/pages/basic/endpoint/index.ts' to '/basic/endpoint'

packages/next/src/server/future/route-matcher-managers/default-route-matcher-manager.test.ts
* DefaultRouteMatcherManager will throw an error when used before it has been reloaded
* DefaultRouteMatcherManager will not error and not match when no matchers are provided
* DefaultRouteMatcherManager can handle locale aware matchers for /nl-NL/some/path and locale nl-NL
* DefaultRouteMatcherManager can handle locale aware matchers for /en-US/some/path and locale en-US
* DefaultRouteMatcherManager can handle locale aware matchers for /some/path and locale {"inferredFromDefault": false, "pathname": "/some/path"}
* DefaultRouteMatcherManager calls the locale route matcher when one is provided
* DefaultRouteMatcherManager will match a route that is not locale aware when it was inferred from the default locale

packages/next/src/server/future/route-matcher-providers/app-page-route-matcher-provider.test.ts
* AppPageRouteMatcherProvider returns no routes with an empty manifest
* AppPageRouteMatcherProvider manifest matching returns the correct routes for /
* AppPageRouteMatcherProvider manifest matching returns the correct routes for /about
* AppPageRouteMatcherProvider manifest matching returns the correct routes for /dashboard/users/[id]
* AppPageRouteMatcherProvider manifest matching returns the correct routes for /dashboard/users
* AppPageRouteMatcherProvider manifest matching returns the correct routes for /dashboard/users

packages/next/src/server/future/route-matcher-providers/app-route-route-matcher-provider.test.ts
* AppRouteRouteMatcherProvider returns no routes with an empty manifest
* AppRouteRouteMatcherProvider manifest matching returns the correct routes for /
* AppRouteRouteMatcherProvider manifest matching returns the correct routes for /users/[id]
* AppRouteRouteMatcherProvider manifest matching returns the correct routes for /users

packages/next/src/server/future/route-matcher-providers/dev/dev-app-page-route-matcher-provider.test.ts
* DevAppPageRouteMatcher returns no routes with an empty filesystem
* DevAppPageRouteMatcher filename matching matches the '/(marketing)/about/page' route specified with the provided files
* DevAppPageRouteMatcher filename matching matches the '/(marketing)/about/page' route specified with the provided files
* DevAppPageRouteMatcher filename matching matches the '/some/other/page' route specified with the provided files
* DevAppPageRouteMatcher filename matching matches the '/page' route specified with the provided files

packages/next/src/server/future/route-matcher-providers/dev/dev-app-route-route-matcher-provider.test.ts
* DevAppRouteRouteMatcher returns no routes with an empty filesystem
* DevAppRouteRouteMatcher filename matching matches the '/some/other/route' route specified with the provided files
* DevAppRouteRouteMatcher filename matching matches the '/route' route specified with the provided files

packages/next/src/server/future/route-matcher-providers/dev/dev-pages-api-route-matcher-provider.test.ts
* DevPagesAPIRouteMatcherProvider returns no routes with an empty filesystem
* DevPagesAPIRouteMatcherProvider filename matching matches the '/api/other/route' route specified with the provided files
* DevPagesAPIRouteMatcherProvider filename matching matches the '/api/other' route specified with the provided files
* DevPagesAPIRouteMatcherProvider filename matching matches the '/api' route specified with the provided files
* DevPagesAPIRouteMatcherProvider filename matching matches the '/api' route specified with the provided files

packages/next/src/server/future/route-matcher-providers/dev/dev-pages-route-matcher-provider.test.ts
* DevPagesRouteMatcherProvider returns no routes with an empty filesystem
* DevPagesRouteMatcherProvider filename matching matches the '/' route specified with the provided files
* DevPagesRouteMatcherProvider filename matching matches the '/some/api/route' route specified with the provided files
* DevPagesRouteMatcherProvider filename matching matches the '/some/other/route' route specified with the provided files
* DevPagesRouteMatcherProvider filename matching matches the '/some/other/route/index/route' route specified with the provided files

packages/next/src/server/future/route-matcher-providers/dev/helpers/file-reader/batched-file-reader.test.ts
* CachedFileReader will only scan the filesystem a minimal amount of times
* CachedFileReader will send an error back only to the correct reader

packages/next/src/server/future/route-matcher-providers/pages-api-route-matcher-provider.test.ts
* PagesAPIRouteMatcherProvider returns no routes with an empty manifest
* PagesAPIRouteMatcherProvider manifest matching returns the correct routes for /api/users/[id]
* PagesAPIRouteMatcherProvider manifest matching returns the correct routes for /api/users
* PagesAPIRouteMatcherProvider manifest matching returns the correct routes for /api

packages/next/src/server/future/route-matcher-providers/pages-route-matcher-provider.test.ts
* PagesRouteMatcherProvider returns no routes with an empty manifest
* PagesRouteMatcherProvider locale matching locale has the match for /blog/[slug]
* PagesRouteMatcherProvider locale matching locale has the match for /
* PagesRouteMatcherProvider locale matching locale has the match for /
* PagesRouteMatcherProvider locale matching locale has the match for /
* PagesRouteMatcherProvider locale matching locale has the match for /404
* PagesRouteMatcherProvider locale matching locale has the match for /404
* PagesRouteMatcherProvider locale matching locale has the match for /404
* PagesRouteMatcherProvider manifest matching returns the correct routes for /users/[id]
* PagesRouteMatcherProvider manifest matching returns the correct routes for /users
* PagesRouteMatcherProvider manifest matching returns the correct routes for /

packages/next/src/server/lib/mock-request.test.ts
* MockedRequest should have the correct properties
* MockedResponse should merge headers correctly when calling writeHead
* MockedResponse should update the statusMessage after calling writeHead
* MockedResponse should handle set-cookie headers correctly

packages/next/src/server/node-polyfill-crypto.test.ts
* node-polyfill-crypto overwrite crypto

packages/next/src/server/web/spec-extension/adapters/headers.test.ts
* HeadersAdapter should be able to create a new instance from an IncomingHttpHeaders
* HeadersAdapter should be able to create a new instance from a Headers
* HeadersAdapter should be able to create a new instance from a HeadersAdapter
* HeadersAdapter should be able to create a new instance from an object
* HeadersAdapter should handle multiple values for a header
* HeadersAdapter entries should return an iterator of entries
* HeadersAdapter keys should return an iterator of keys
* HeadersAdapter values should return an iterator of values
* HeadersAdapter forEach should iterate over all entries
* HeadersAdapter iterator should iterate over all entries
* HeadersAdapter case-insensitive should handle different case for header names
* HeadersAdapter case-insensitive should handle different case for header names when mutated out of band
* HeadersAdapter sealed should be able to seal a Headers instance
* HeadersAdapter sealed should be able to seal a HeadersAdapter instance
* HeadersAdapter sealed should be able to seal a HeadersAdapter and still mutate the original

packages/next/src/server/web/spec-extension/adapters/request-cookies.test.ts
* RequestCookiesAdapter should be able to create a new instance from a RequestCookies
* RequestCookiesAdapter should be able to create a new instance from an empty RequestCookies

packages/next/src/server/web/utils.test.ts
* toNodeHeaders should handle multiple set-cookie headers correctly
* toNodeHeaders should handle a single set-cookie header correctly
* toNodeHeaders should handle a single set-cookie header with multiple cookies correctly
* toNodeHeaders should handle mixed case set-cookie headers correctly

packages/next/src/shared/lib/get-hostname.test.ts
* getHostname from URL should return example.com for http://example.com
* getHostname from URL should return example.com for http://example.com/
* getHostname from URL should return example.com for http://example.com:3000
* getHostname from URL should return example.com for https://example.com
* getHostname from URL should return example.com for https://example.com/
* getHostname from URL should return example.com for https://example.com:3000
* getHostname from URL should return localhost for http://localhost
* getHostname from URL should return localhost for http://localhost/
* getHostname from URL should return localhost for http://localhost:3000
* getHostname from URL should return 127.0.0.1 for http://127.0.0.1
* getHostname from URL should return 127.0.0.1 for http://127.0.0.1/
* getHostname from URL should return 127.0.0.1 for http://127.0.0.1:3000
* getHostname from URL should return 8.8.8.8 for http://8.8.8.8
* getHostname from URL should return 8.8.8.8 for http://8.8.8.8/
* getHostname from URL should return 8.8.8.8 for http://8.8.8.8:3000
* getHostname should return undefined for empty input

packages/next/src/shared/lib/router/utils/app-paths.test.ts
* normalizeRscPath enabled should normalize url with .rsc
* normalizeRscPath enabled should normalize url with .rsc and searchparams
* normalizeRscPath disabled should normalize url with .rsc
* normalizeRscPath disabled should normalize url with .rsc and searchparams

packages/next/src/shared/lib/router/adapters.test.tsx
* adaptForAppRouterInstance should forward a call to \`back()\`
* adaptForAppRouterInstance should forward a call to \`forward()\`
* adaptForAppRouterInstance should forward a call to \`reload()\`
* adaptForAppRouterInstance should forward a call to \`push()\`
* adaptForAppRouterInstance should forward a call to \`push()\` with options
* adaptForAppRouterInstance should forward a call to \`replace()\`
* adaptForAppRouterInstance should forward a call to \`replace()\` with options
* adaptForAppRouterInstance should forward a call to \`prefetch()\`

packages/next/src/shared/lib/router/utils/route-regex.test.ts
* getNamedRouteRegex should handle interception markers adjacent to dynamic path segments
* getNamedRouteRegex should handle multi-level interception markers
* getNamedRouteRegex should handle interception markers not adjacent to dynamic path segments
* getNamedRouteRegex should handle optional dynamic path segments
* getNamedRouteRegex should handle optional catch-all dynamic path segments

test/development/acceptance-app/dynamic-error.test.ts
* dynamic = "error" in devmode should show error overlay when dynamic is forced

test/development/acceptance-app/error-message-url.test.ts
* Error overlay - error message urls should be possible to click url in runtime error

test/development/acceptance-app/hydration-error.test.ts
* Error overlay for hydration errors should show correct hydration error when client and server render different text
* Error overlay for hydration errors should show correct hydration error when client renders an extra element
* Error overlay for hydration errors should show correct hydration error when client renders an extra text node
* Error overlay for hydration errors should show correct hydration error when server renders an extra element
* Error overlay for hydration errors should show correct hydration error when server renders an extra text node
* Error overlay for hydration errors should show correct hydration error when client renders an extra node inside Suspense content
* Error overlay for hydration errors should not show a hydration error when using \`useId\` in a client component

test/development/acceptance-app/ReactRefresh.test.ts
* ReactRefresh app can edit a component without losing state
* ReactRefresh app cyclic dependencies

test/development/acceptance-app/ReactRefreshLogBox-builtins.test.ts
* ReactRefreshLogBox app turbo Node.js builtins
* ReactRefreshLogBox app turbo Module not found
* ReactRefreshLogBox app turbo Module not found empty import trace

test/development/acceptance-app/ReactRefreshRegression.test.ts
* ReactRefreshRegression app can fast refresh a page with dynamic rendering
* ReactRefreshRegression app can fast refresh a page with config

test/development/acceptance-app/ReactRefreshRequire.test.ts
* ReactRefreshRequire app re-runs accepted modules
* ReactRefreshRequire app propagates a hot update to closest accepted module
* ReactRefreshRequire app propagates hot update to all inverse dependencies
* ReactRefreshRequire app runs dependencies before dependents
* ReactRefreshRequire app provides fresh value for module.exports in parents
* ReactRefreshRequire app provides fresh value for exports.* in parents
* ReactRefreshRequire app provides fresh value for ES6 named import in parents
* ReactRefreshRequire app provides fresh value for ES6 default import in parents
* ReactRefreshRequire app stops update propagation after module-level errors
* ReactRefreshRequire app can continue hot updates after module-level errors with module.exports
* ReactRefreshRequire app can continue hot updates after module-level errors with ES6 exports
* ReactRefreshRequire app does not accumulate stale exports over time
* ReactRefreshRequire app bails out if update bubbles to the root via the only path
* ReactRefreshRequire app bails out if the update bubbles to the root via one of the paths
* ReactRefreshRequire app can replace a module before it is loaded

test/development/acceptance/hydration-error.test.ts
* Error overlay for hydration errors should show correct hydration error when client and server render different text

test/development/acceptance/ReactRefresh.test.ts
* ReactRefresh can edit a component without losing state
* ReactRefresh cyclic dependencies

test/development/acceptance-app/server-components.test.ts
* Error Overlay for server components createContext called in Server Component should show error when React.createContext is called
* Error Overlay for server components createContext called in Server Component should show error when React.createContext is called in external package
* Error Overlay for server components createContext called in Server Component should show error when createContext is called in external package
* Error Overlay for server components React component hooks called in Server Component should show error when React.<client-hook> is called
* Error Overlay for server components React component hooks called in Server Component should show error when React.experiment_useOptimistic is called
* Error Overlay for server components React component hooks called in Server Component should show error when React.experiment_useOptimistic is renamed in destructuring
* Error Overlay for server components React component hooks called in Server Component should show error when React.<client-hook> is called in external package
* Error Overlay for server components React component hooks called in Server Component should show error when React client hook is called in external package
* Error Overlay for server components Class component used in Server Component should show error when Class Component is used
* Error Overlay for server components Class component used in Server Component should show error when React.PureComponent is rendered in external package
* Error Overlay for server components Class component used in Server Component should show error when Component is rendered in external package
* Error Overlay for server components Next.js component hooks called in Server Component should show error when useRouter is called
* Error Overlay for server components Next.js component hooks called in Server Component should show error when useSearchParams is called
* Error Overlay for server components Next.js component hooks called in Server Component should show error when useSelectedLayoutSegment is called
* Error Overlay for server components Next.js component hooks called in Server Component should show error when useSelectedLayoutSegments is called
* Error Overlay for server components Next.js component hooks called in Server Component should show error when usePathname is called

test/development/acceptance/ReactRefreshLogBox-app-doc.test.ts
* ReactRefreshLogBox turbo empty _app shows logbox
* ReactRefreshLogBox turbo empty _document shows logbox

test/development/acceptance/ReactRefreshLogBox-builtins.test.ts
* ReactRefreshLogBox turbo Node.js builtins
* ReactRefreshLogBox turbo Module not found
* ReactRefreshLogBox turbo Module not found (empty import trace)

test/development/acceptance/error-recovery.test.ts
* ReactRefreshLogBox turbo logbox: can recover from a syntax error without losing state

test/development/acceptance/ReactRefreshRegression.test.ts
* ReactRefreshRegression styled-components hydration mismatch
* ReactRefreshRegression can fast refresh a page with getStaticProps
* ReactRefreshRegression can fast refresh a page with getServerSideProps

test/development/api-cors-with-rewrite/index.test.ts
* Rewritten API Requests should pass OPTIONS requests to the api function should pass OPTIONS requests to the api function

test/development/app-dir/app-routes-error/index.test.ts
* app-dir - app routes errors bad lowercase exports should print an error when using lowercase "get" in dev
* app-dir - app routes errors bad lowercase exports should print an error when using lowercase "head" in dev
* app-dir - app routes errors bad lowercase exports should print an error when using lowercase "options" in dev
* app-dir - app routes errors bad lowercase exports should print an error when using lowercase "post" in dev
* app-dir - app routes errors bad lowercase exports should print an error when using lowercase "put" in dev
* app-dir - app routes errors bad lowercase exports should print an error when using lowercase "delete" in dev
* app-dir - app routes errors bad lowercase exports should print an error when using lowercase "patch" in dev

test/development/acceptance/ReactRefreshRequire.test.ts
* ReactRefreshRequire propagates a hot update to closest accepted module
* ReactRefreshRequire runs dependencies before dependents
* ReactRefreshRequire provides fresh value for module.exports in parents
* ReactRefreshRequire provides fresh value for exports.* in parents
* ReactRefreshRequire provides fresh value for ES6 named import in parents
* ReactRefreshRequire provides fresh value for ES6 default import in parents
* ReactRefreshRequire stops update propagation after module-level errors
* ReactRefreshRequire can continue hot updates after module-level errors with module.exports
* ReactRefreshRequire can continue hot updates after module-level errors with ES6 exports
* ReactRefreshRequire does not accumulate stale exports over time
* ReactRefreshRequire bails out if update bubbles to the root via the only path
* ReactRefreshRequire bails out if the update bubbles to the root via one of the paths
* ReactRefreshRequire can replace a module before it is loaded

test/development/app-dir/multiple-compiles-single-route/multiple-compiles-single-route.test.ts
* multiple-compiles-single-route should not compile additional matching paths

test/development/app-dir/strict-mode-enabled-by-default/strict-mode-enabled-by-default.test.ts
* Strict Mode enabled by default should work using browser

test/development/app-dir/basic/basic.test.ts
* basic app-dir tests should reload app pages without error

test/development/basic/asset-prefix.test.ts
* asset-prefix should load the app properly without reloading

test/development/basic/barrel-optimization.test.ts
* optimizePackageImports should handle recursive wildcard exports
* optimizePackageImports should not break "use client" directive in optimized packages

test/development/basic/define-class-fields.test.ts
* useDefineForClassFields SWC option tsx should compile with useDefineForClassFields enabled
* useDefineForClassFields SWC option Initializes resident to undefined after the call to 'super()' when with useDefineForClassFields enabled
* useDefineForClassFields SWC option set accessors from base classes won’t get triggered with useDefineForClassFields enabled

test/development/basic/emotion-swc.test.ts
* emotion SWC option should have styling from the css prop

test/development/acceptance-app/ReactRefreshLogBox.test.ts
* ReactRefreshLogBox app turbo should strip whitespace correctly with newline
* ReactRefreshLogBox app turbo module init error not shown
* ReactRefreshLogBox app turbo boundaries
* ReactRefreshLogBox app turbo Should not show __webpack_exports__ when exporting anonymous arrow function
* ReactRefreshLogBox app turbo Unhandled errors and rejections opens up in the minimized state
* ReactRefreshLogBox app turbo Server component errors should open up in fullscreen
* ReactRefreshLogBox app turbo Import trace when module not found in layout
* ReactRefreshLogBox app turbo Can't resolve @import in CSS file
* ReactRefreshLogBox app turbo server component can recover from error thrown in the module
* ReactRefreshLogBox app turbo client component can recover from error thrown in the module

test/development/basic/legacy-decorators.test.ts
* Legacy decorators SWC option should compile with legacy decorators enabled

test/development/basic/misc.test.ts
* misc basic dev tests, basePath: "" should set process.env.NODE_ENV in development
* misc basic dev tests, basePath: "" should allow access to public files
* misc basic dev tests, basePath: "" With Security Related Issues should not allow accessing files outside .next/static and .next/server directory
* misc basic dev tests, basePath: "" With Security Related Issues should handle encoded / value for trailing slash correctly
* misc basic dev tests, basePath: "" Development Logs should warn when prefetch is true
* misc basic dev tests, basePath: "" Development Logs should not warn when prefetch is false
* misc basic dev tests, basePath: "" Development Logs should not warn when prefetch is not specified
* misc basic dev tests, basePath: "/docs" should set process.env.NODE_ENV in development
* misc basic dev tests, basePath: "/docs" should allow access to public files
* misc basic dev tests, basePath: "/docs" With Security Related Issues should not allow accessing files outside .next/static and .next/server directory
* misc basic dev tests, basePath: "/docs" With Security Related Issues should handle encoded / value for trailing slash correctly
* misc basic dev tests, basePath: "/docs" Development Logs should warn when prefetch is true
* misc basic dev tests, basePath: "/docs" Development Logs should not warn when prefetch is false
* misc basic dev tests, basePath: "/docs" Development Logs should not warn when prefetch is not specified

test/development/acceptance/ReactRefreshLogBox.test.ts
* ReactRefreshLogBox turbo should strip whitespace correctly with newline
* ReactRefreshLogBox turbo module init error not shown
* ReactRefreshLogBox turbo boundaries

test/development/basic/gssp-ssr-change-reloading/test/index.test.ts
* GS(S)P Server-Side Change Reloading should not reload page when client-side is changed too GSP
* GS(S)P Server-Side Change Reloading should update page when getStaticProps is changed only
* GS(S)P Server-Side Change Reloading should show indicator when re-fetching data
* GS(S)P Server-Side Change Reloading should update page when getStaticPaths is changed only
* GS(S)P Server-Side Change Reloading should update page when getStaticProps is changed only for /index
* GS(S)P Server-Side Change Reloading should update page when getStaticProps is changed only for /another/index
* GS(S)P Server-Side Change Reloading should keep scroll position when updating from change in getStaticProps
* GS(S)P Server-Side Change Reloading should not reload page when client-side is changed too GSSP
* GS(S)P Server-Side Change Reloading should update page when getServerSideProps is changed only
* GS(S)P Server-Side Change Reloading should update on props error in getStaticProps
* GS(S)P Server-Side Change Reloading should update on thrown error in getStaticProps
* GS(S)P Server-Side Change Reloading should refresh data when server import is updated

test/development/basic/node-builtins.test.ts
* node builtins should have polyfilled node.js builtins for the browser correctly
* node builtins should have polyfilled node.js builtins for the browser correctly in client component
* node builtins should support node.js builtins
* node builtins should support node.js builtins prefixed by node:
* node builtins should support node.js builtins in server component
* node builtins should support node.js builtins prefixed by node: in server component

test/development/basic/next-rs-api.test.ts
* next.rs api should detect the correct routes
* next.rs api should allow to write root page to disk
* next.rs api should allow to write pages edge api to disk
* next.rs api should allow to write pages Node.js api to disk
* next.rs api should allow to write app Node.js page to disk
* next.rs api should allow to write pages edge page to disk
* next.rs api should allow to write pages Node.js page to disk
* next.rs api should allow to write app edge route to disk
* next.rs api should allow to write app Node.js route to disk
* next.rs api should have working HMR on client-side change on a page 0
* next.rs api should have working HMR on client-side change on a page 1
* next.rs api should have working HMR on client-side change on a page 2
* next.rs api should have working HMR on server-side change on a page 0
* next.rs api should have working HMR on server-side change on a page 1
* next.rs api should have working HMR on server-side change on a page 2
* next.rs api should have working HMR on client and server-side change on a page 0
* next.rs api should have working HMR on client and server-side change on a page 1
* next.rs api should have working HMR on client and server-side change on a page 2
* next.rs api should have working HMR on client-side change on a app page 0
* next.rs api should have working HMR on client-side change on a app page 1
* next.rs api should have working HMR on client-side change on a app page 2
* next.rs api should have working HMR on server-side change on a app page 0
* next.rs api should have working HMR on server-side change on a app page 1
* next.rs api should have working HMR on server-side change on a app page 2

test/development/basic/styled-components.test.ts
* styled-components SWC transform should not have hydration mismatch with styled-components transform enabled
* styled-components SWC transform should render the page with correct styles
* styled-components SWC transform should contain styles in initial HTML
* styled-components SWC transform should only render once on the server per request

test/development/basic/next-dynamic.test.ts
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import default behavior should render even there are no physical chunk exists
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import default behavior should SSR nested dynamic components and skip nonSSR ones
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import default behavior should hydrate nested chunks
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import default behavior should render the component Head content
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import ssr:false option should not render loading on the server side
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import ssr:true option should render the component on client side
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import custom chunkfilename should render the component on client side
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import custom loading should render custom loading on the server side when \`ssr:false\` and \`loading\` is provided
* basic next/dynamic usage, basePath: "" with "swc" compiler swc Dynamic import custom loading should render the component on client side
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import default behavior should render even there are no physical chunk exists
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import default behavior should SSR nested dynamic components and skip nonSSR ones
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import default behavior should hydrate nested chunks
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import default behavior should render the component Head content
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import ssr:false option should not render loading on the server side
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import ssr:true option should render the component on client side
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import custom chunkfilename should render the component on client side
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import custom loading should render custom loading on the server side when \`ssr:false\` and \`loading\` is provided
* basic next/dynamic usage, basePath: "/docs" with "swc" compiler swc Dynamic import custom loading should render the component on client side
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import default behavior should render even there are no physical chunk exists
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import default behavior should SSR nested dynamic components and skip nonSSR ones
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import default behavior should hydrate nested chunks
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import default behavior should render the component Head content
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import ssr:false option should not render loading on the server side
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import ssr:true option should render the component on client side
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import custom chunkfilename should render the component on client side
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import custom loading should render custom loading on the server side when \`ssr:false\` and \`loading\` is provided
* basic next/dynamic usage, basePath: "" with "document.getInitialProps" compiler document.getInitialProps Dynamic import custom loading should render the component on client side

test/development/app-hmr/hmr.test.ts
* app-dir-hmr filesystem changes should not continously poll when hitting a not found page
* app-dir-hmr filesystem changes should not break when renaming a folder
* app-dir-hmr filesystem changes should have no unexpected action error for hmr

test/development/acceptance-app/rsc-build-errors.test.ts
* Error overlay - RSC build errors should error when page component export is not valid
* Error overlay - RSC build errors should error when page component export is not valid on initial load
* Error overlay - RSC build errors should error for invalid undefined module retuning from next dynamic

test/development/basic/hmr.test.ts
* basic HMR, basePath: "" should show hydration error correctly
* basic HMR, basePath: "" should have correct router.isReady for auto-export page
* basic HMR, basePath: "" should have correct router.isReady for getStaticProps page
* basic HMR, basePath: "" Hot Module Reloading editing a page should detect the changes and display it
* basic HMR, basePath: "" Hot Module Reloading editing a page should not reload unrelated pages
* basic HMR, basePath: "" Hot Module Reloading editing a page should update styles correctly
* basic HMR, basePath: "" Hot Module Reloading editing a page should update styles in a stateful component correctly
* basic HMR, basePath: "" Hot Module Reloading editing a page should update styles in a dynamic component correctly
* basic HMR, basePath: "" Error Recovery should not continously poll a custom error page
* basic HMR, basePath: "/docs" should show hydration error correctly
* basic HMR, basePath: "/docs" should have correct router.isReady for auto-export page
* basic HMR, basePath: "/docs" should have correct router.isReady for getStaticProps page
* basic HMR, basePath: "/docs" Hot Module Reloading editing a page should detect the changes and display it
* basic HMR, basePath: "/docs" Hot Module Reloading editing a page should not reload unrelated pages
* basic HMR, basePath: "/docs" Hot Module Reloading editing a page should update styles correctly
* basic HMR, basePath: "/docs" Hot Module Reloading editing a page should update styles in a stateful component correctly
* basic HMR, basePath: "/docs" Hot Module Reloading editing a page should update styles in a dynamic component correctly
* basic HMR, basePath: "/docs" Error Recovery should not continously poll a custom error page

test/integration/conflicting-public-file-page/test/index.test.js
* Errors on conflict between public file and page file development mode Throws error during development

test/integration/config/test/index.test.js
* Configuration should disable X-Powered-By header support
* Configuration renders server config on the server only
* Configuration renders public config on the server only
* Configuration correctly imports a package that defines \`module\` but no \`main\` in package.json
* Configuration should have config available on the client

test/integration/css-client-nav/test/index.test.js
* CSS Module client-side navigation dev should be able to client-side navigate from red to blue
* CSS Module client-side navigation dev should be able to client-side navigate from blue to red
* CSS Module client-side navigation dev should be able to client-side navigate from none to red
* CSS Module client-side navigation dev should be able to client-side navigate from none to blue

test/integration/custom-routes-catchall/test/index.test.js
* Custom routes dev mode should rewrite and render page correctly
* Custom routes dev mode should rewrite to /_next/static correctly
* Custom routes dev mode should rewrite to public/static correctly
* Custom routes dev mode should rewrite to public file correctly

test/integration/custom-error/test/index.test.js
* Custom _error dev mode 2 should not warn with /_error and /404
* Custom _error dev mode 2 should warn on custom /_error without custom /404

test/integration/css-modules/test/index.test.js
* Has CSS Module in computed styles in Development should have CSS for page
* Can hot reload CSS Module without losing state should update CSS color without remounting <input>

test/integration/css/test/css-and-styled-jsx.test.js
* Ordering with styled-jsx (dev) should have the correct color (css ordering)

test/integration/config-output-export/test/index.test.ts
* config-output-export should work with static homepage
* config-output-export should error with "i18n" config
* config-output-export should error with "rewrites" config
* config-output-export should error with "redirects" config
* config-output-export should error with "headers" config
* config-output-export should error with api routes function
* config-output-export should error with middleware function
* config-output-export should error with getStaticProps and revalidate 10 seconds (ISR)
* config-output-export should work with getStaticProps and revalidate false
* config-output-export should work with getStaticProps and without revalidate
* config-output-export should error with getServerSideProps without fallback
* config-output-export should error with getStaticPaths and fallback true
* config-output-export should error with getStaticPaths and fallback blocking
* config-output-export should work with getStaticPaths and fallback false

test/integration/create-next-app/index.test.ts
* create next app non-empty directory
* create next app empty directory
* create next app invalid example name
* create next app valid example
* create next app valid example without package.json
* create next app should allow example with GitHub URL
* create next app should allow example with GitHub URL with trailing slash
* create next app should allow example with GitHub URL and example-path
* create next app should use --example-path over the file path in the GitHub URL
* create next app should fall back to default template
* create next app should allow an example named default
* create next app should exit if example flag is empty
* create next app should exit if the folder is not writable
* create next app should create a project in the current directory
* create next app should ask the user for a name for the project if none supplied

test/integration/css/test/css-modules.test.js
* Basic CSS Modules Ordering Development Mode should have correct color on index page (on load)
* Basic CSS Modules Ordering Development Mode should have correct color on index page (on hover)
* Basic CSS Modules Ordering Development Mode should have correct color on index page (on nav)
* Ordering with Global CSS and Modules (dev) should not execute scripts in any order
* Ordering with Global CSS and Modules (dev) should have the correct color (css ordering)
* Ordering with Global CSS and Modules (dev) should have the correct color (css ordering) during hot reloads
* CSS Modules Composes Ordering Development Mode should have correct color on index page (on load)
* CSS Modules Composes Ordering Development Mode should have correct color on index page (on nav from other)

test/integration/create-next-app/package-manager.test.ts
* should use npm as the package manager on supplying --use-npm
* should use npm as the package manager on supplying --use-npm with example
* should use Yarn as the package manager on supplying --use-yarn
* should use Yarn as the package manager on supplying --use-yarn with example
* should use pnpm as the package manager on supplying --use-pnpm
* should use pnpm as the package manager on supplying --use-pnpm with example
* should use Bun as the package manager on supplying --use-bun with example
* should infer npm as the package manager
* should infer npm as the package manager with example
* should infer yarn as the package manager
* should infer yarn as the package manager with example
* should infer pnpm as the package manager
* should infer pnpm as the package manager with example
* should infer Bun as the package manager
* should infer Bun as the package manager with example

test/integration/css/test/dev-css-handling.test.js
* Has CSS in computed styles in Development should have CSS for page
* Body is not hidden when unused in Development should have body visible
* Body is not hidden when broken in Development should have body visible
* React Lifecyce Order (dev) should have the correct color on mount after navigation

test/integration/create-next-app/templates-app.test.ts
* create-next-app --app should create TS appDir projects with --ts
* create-next-app --app should create JS appDir projects with --js
* create-next-app --app should create JS appDir projects with --js --src-dir
* create-next-app --app should create Tailwind CSS appDir projects with --tailwind

test/integration/create-next-app/templates-pages.test.ts
* create-next-app templates should prompt user to choose if --ts or --js is not provided
* create-next-app templates should create TS projects with --ts, --typescript
* create-next-app templates should create TS projects with --ts, --typescript --src-dir
* create-next-app templates should create JS projects with --js, --javascript
* create-next-app templates should create JS projects with --js, --javascript --src-dir
* create-next-app templates should prompt user to choose if --import-alias is not provided
* create-next-app templates should work with --tailwind and --src together
* create-next-app templates should prompt user to choose if --tailwind or --no-tailwind is not provided

test/development/experimental-https-server/https-server.generated-key.test.ts
* experimental-https-server (generated certificate) only runs on CI as it requires administrator privileges

test/development/correct-tsconfig-defaults/index.test.ts
* correct tsconfig.json defaults should add \`moduleResolution\` when generating tsconfig.json in dev
* correct tsconfig.json defaults should not warn for \`moduleResolution\` when already present and valid

test/development/dotenv-default-expansion/index.test.ts
* Dotenv default expansion should work

test/development/basic/theme-ui.test.ts
* theme-ui SWC option should have theme provided styling

test/development/experimental-https-server/https-server.provided-key.test.ts
* experimental-https-server (provided certificate) should successfully load the app in app dir
* experimental-https-server (provided certificate) should successfully load the app in pages dir

test/development/basic/tailwind-jit.test.ts
* TailwindCSS JIT works with JIT enabled

test/development/client-dev-overlay/index.test.ts
* client-dev-overlay should be able to fullscreen the minimized overlay
* client-dev-overlay should be able to minimize the fullscreen overlay
* client-dev-overlay should be able to hide the minimized overlay
* client-dev-overlay should have a role of "dialog" if the page is focused

test/development/gssp-notfound/index.test.ts
* getServerSideProps returns notFound: true should not poll indefinitely

test/development/next-font/deprecated-package.test.ts
* Deprecated @next/font warning should warn if @next/font is in deps
* Deprecated @next/font warning should not warn if @next/font is not in deps

test/development/middleware-warnings/index.test.ts
* middlewares does not warn when returning response with literal string
* middlewares does not warn when returning response with literal number
* middlewares does not warn when returning response with JSON.stringify
* middlewares does not warn when populating response with a value
* middlewares does not warn when populating response with a function call
* middlewares does not warn when populating response with an async function call
* middlewares does not warn when returning null reponse body
* middlewares does not warn when returning undefined response body

test/development/project-directory-with-styled-jsx-suffix/index.test.ts
* project directory with styled-jsx suffix should work

test/development/jsconfig-path-reloading/index.test.ts
* jsconfig-path-reloading jsconfig should load with initial paths config correctly
* jsconfig-path-reloading jsconfig should recover from module not found when paths is updated
* jsconfig-path-reloading jsconfig should automatically fast refresh content when path is added without error
* jsconfig-path-reloading jsconfig added after starting dev should load with initial paths config correctly
* jsconfig-path-reloading jsconfig added after starting dev should recover from module not found when paths is updated

test/development/watch-config-file/index.test.ts
* watch-config-file should output config file change

test/development/typescript-auto-install/index.test.ts
* typescript-auto-install should work
* typescript-auto-install should detect TypeScript being added and auto setup

test/development/tsconfig-path-reloading/index.test.ts
* tsconfig-path-reloading tsconfig should load with initial paths config correctly
* tsconfig-path-reloading tsconfig should recover from module not found when paths is updated
* tsconfig-path-reloading tsconfig should automatically fast refresh content when path is added without error
* tsconfig-path-reloading tsconfig added after starting dev should load with initial paths config correctly
* tsconfig-path-reloading tsconfig added after starting dev should recover from module not found when paths is updated
* tsconfig-path-reloading tsconfig added after starting dev should automatically fast refresh content when path is added without error

test/e2e/app-dir/_allow-underscored-root-directory/_allow-underscored-root-directory.test.ts
* _allow-underscored-root-directory should not serve app path with underscore
* _allow-underscored-root-directory should pages path with a underscore at the root

test/e2e/app-dir/actions/app-action-export.test.ts
* app-dir action handling - next export skip test for dev mode

test/development/repeated-dev-edits/repeated-dev-edits.test.ts
* repeated-dev-edits should not break the hydration 

test/development/pages-dir/client-navigation/index.test.ts
* Client Navigation should not reload when visiting /_error directly
* Client Navigation with <Link/> should navigate the page
* Client Navigation with <Link/> should have proper error when no children are provided
* Client Navigation with <Link/> should not throw error when one number type child is provided
* Client Navigation with <Link/> should navigate back after reload
* Client Navigation with <Link/> should navigate forwards after reload
* Client Navigation with <Link/> should error when calling onClick without event
* Client Navigation with <Link/> should navigate via the client side
* Client Navigation with <Link/> should navigate an absolute url
* Client Navigation with <Link/> should call mouse handlers with an absolute url
* Client Navigation with <Link/> should navigate an absolute local url
* Client Navigation with <Link/> should navigate an absolute local url with as
* Client Navigation with <a/> tag inside the <Link /> should navigate the page
* Client Navigation with <a/> tag inside the <Link /> should not navigate if the <a/> tag has a target
* Client Navigation with <a/> tag inside the <Link /> should not navigate if the click-event is modified
* Client Navigation with <a/> tag inside the <Link /> should not reload when link in svg is clicked
* Client Navigation with unexpected <a/> nested tag should not redirect if passHref prop is not defined in Link
* Client Navigation with unexpected <a/> nested tag should redirect if passHref prop is defined in Link
* Client Navigation with empty getInitialProps() should render an error
* Client Navigation with the same page but different querystring should navigate the page
* Client Navigation with the same page but different querystring should remove querystring
* Client Navigation with the current url should reload the page
* Client Navigation with the current url should always replace the state
* Client Navigation with onClick action should reload the page and perform additional action
* Client Navigation with onClick action should not reload if default was prevented
* Client Navigation with onClick action should always replace the state and perform additional action
* Client Navigation resets scroll at the correct time should reset scroll before the new page runs its lifecycles (<Link />)
* Client Navigation resets scroll at the correct time should reset scroll before the new page runs its lifecycles (Router#push)
* Client Navigation resets scroll at the correct time should intentionally not reset scroll before the new page runs its lifecycles (Router#push)
* Client Navigation with hash changes check hydration mis-match should not have hydration mis-match for hash link
* Client Navigation with hash changes when hash change via Link should not run getInitialProps
* Client Navigation with hash changes when hash change via Link should scroll to the specified position on the same page
* Client Navigation with hash changes when hash change via Link should not scroll to hash when scroll={false} is set
* Client Navigation with hash changes when hash change via Link should scroll to the specified position on the same page with a name property
* Client Navigation with hash changes when hash change via Link should scroll to the specified position to a new page
* Client Navigation with hash changes when hash change via Link should scroll to the specified CJK position to a new page
* Client Navigation with hash changes when hash change via Link Should update asPath
* Client Navigation with hash changes when hash change via A tag should not run getInitialProps
* Client Navigation with hash changes when hash get removed should not run getInitialProps
* Client Navigation with hash changes when hash get removed should not run getInitialProps when removing via back
* Client Navigation with hash changes when hash set to empty should not run getInitialProps
* Client Navigation with hash changes with state when passing state via hash change should increment the history state counter
* Client Navigation with hash changes with state when passing state via hash change should increment the shallow history state counter
* Client Navigation with shallow routing should update the url without running getInitialProps
* Client Navigation with shallow routing should handle the back button and should not run getInitialProps
* Client Navigation with shallow routing should run getInitialProps always when rending the page to the screen
* Client Navigation with shallow routing should keep the scroll position on shallow routing
* Client Navigation should scroll to top when the scroll option is set to true
* Client Navigation with URL objects should work with <Link/>
* Client Navigation with URL objects should work with "Router.push"
* Client Navigation with URL objects should work with the "replace" prop
* Client Navigation with URL objects should handle undefined in router.push
* Client Navigation with querystring relative urls should work with Link
* Client Navigation with querystring relative urls should work with router.push
* Client Navigation with querystring relative urls should work with router.replace
* Client Navigation with getInitialProp redirect should redirect the page via client side
* Client Navigation with getInitialProp redirect should redirect the page when loading
* Client Navigation with different types of urls should work with normal page
* Client Navigation with different types of urls should work with dir/ page
* Client Navigation with different types of urls should not work with /index page
* Client Navigation with different types of urls should work with / page
* Client Navigation with the HOC based router should navigate as expected
* Client Navigation with asPath inside getInitialProps should show the correct asPath with a Link with as prop
* Client Navigation with asPath inside getInitialProps should show the correct asPath with a Link without the as prop
* Client Navigation with asPath with next/router should show the correct asPath
* Client Navigation with asPath with next/router should navigate an absolute url on push
* Client Navigation with asPath with next/router should navigate an absolute url on replace
* Client Navigation with asPath with next/router should navigate an absolute local url on push
* Client Navigation with asPath with next/router should navigate an absolute local url on replace
* Client Navigation with asPath with next/link should use pushState with same href and different asPath
* Client Navigation with asPath with next/link should detect asPath query changes correctly
* Client Navigation with 404 pages should 404 on not existent page
* Client Navigation with 404 pages should 404 on wrong casing
* Client Navigation with 404 pages should get url dynamic param
* Client Navigation with 404 pages should 404 on wrong casing of url dynamic param
* Client Navigation with 404 pages should not 404 for <page>/
* Client Navigation with 404 pages should should not contain a page script in a 404 page
* Client Navigation updating head while client routing should only execute async and defer scripts once
* Client Navigation updating head while client routing should warn when stylesheets or scripts are in head
* Client Navigation updating head while client routing should warn when scripts are in head
* Client Navigation updating head while client routing should not warn when application/ld+json scripts are in head
* Client Navigation updating head while client routing should update head during client routing
* Client Navigation updating head while client routing should update title during client routing
* Client Navigation updating head while client routing should update head when unmounting component
* Client Navigation foreign history manipulation should ignore history state without options
* Client Navigation foreign history manipulation should ignore history state with an invalid url
* Client Navigation foreign history manipulation should ignore foreign history state with missing properties
* Client Navigation should not error on module.exports + polyfills
* Client Navigation should work on nested /index/index.js
* Client Navigation should handle undefined prop in head client-side
* Client Navigation should emit routeChangeError on hash change cancel
* Client Navigation should navigate to paths relative to the current page
* Client Navigation Rendering via HTTP renders a stateless component
* Client Navigation Rendering via HTTP should should not contain scripts that are not js
* Client Navigation Rendering via HTTP should handle undefined prop in head server-side
* Client Navigation Rendering via HTTP renders with fragment syntax
* Client Navigation Rendering via HTTP renders when component is a forwardRef instance
* Client Navigation Rendering via HTTP renders when component is a memo instance
* Client Navigation Rendering via HTTP header renders default charset
* Client Navigation Rendering via HTTP header renders default viewport
* Client Navigation Rendering via HTTP header helper renders header information
* Client Navigation Rendering via HTTP header helper dedupes tags
* Client Navigation Rendering via HTTP header helper dedupes tags with the same key as the default
* Client Navigation Rendering via HTTP header helper avoids dedupe of specific tags
* Client Navigation Rendering via HTTP header helper avoids dedupe of meta tags with the same name if they use unique keys
* Client Navigation Rendering via HTTP header helper renders Fragment children
* Client Navigation Rendering via HTTP header helper renders boolean attributes correctly children
* Client Navigation Rendering via HTTP should place charset element at the top of <head>
* Client Navigation Rendering via HTTP should render the page with custom extension
* Client Navigation Rendering via HTTP should render the page without \`err\` property
* Client Navigation Rendering via HTTP should render the page with \`nextExport\` property
* Client Navigation Rendering via HTTP should render the page without \`nextExport\` property
* Client Navigation Rendering via HTTP renders styled jsx
* Client Navigation Rendering via HTTP renders styled jsx external
* Client Navigation Rendering via HTTP renders properties populated asynchronously
* Client Navigation Rendering via HTTP renders a link component
* Client Navigation Rendering via HTTP getInitialProps circular structure
* Client Navigation Rendering via HTTP getInitialProps should be class method
* Client Navigation Rendering via HTTP getInitialProps resolves to null
* Client Navigation Rendering via HTTP default Content-Type
* Client Navigation Rendering via HTTP setting Content-Type in getInitialProps
* Client Navigation Rendering via HTTP should render 404 for _next routes that do not exist
* Client Navigation Rendering via HTTP should render page that has module.exports anywhere
* Client Navigation Rendering via HTTP allows to import .json files
* Client Navigation Rendering via HTTP default export is not a React Component
* Client Navigation Rendering via HTTP error-inside-page
* Client Navigation Rendering via HTTP asPath
* Client Navigation Rendering via HTTP 404 should 404 on not existent page
* Client Navigation Rendering via HTTP 404 should 404 on wrong casing
* Client Navigation Rendering via HTTP 404 should not 404 for <page>/
* Client Navigation Rendering via HTTP 404 should should not contain a page script in a 404 page
* Client Navigation Rendering via HTTP with the HOC based router should navigate as expected
* Client Navigation Rendering via HTTP with the HOC based router should include asPath
* Client Navigation Rendering via HTTP should show a valid error when undefined is thrown

test/development/middleware-errors/index.test.ts
* middleware - development errors when middleware throws synchronously renders the error correctly and recovers
* middleware - development errors when middleware contains an unhandled rejection logs the error correctly
* middleware - development errors when middleware contains an unhandled rejection does not render the error
* middleware - development errors when there is an unhandled rejection while loading the module logs the error correctly
* middleware - development errors when there is an unhandled rejection while loading the module does not render the error
* middleware - development errors when there is an unhandled rejection while loading a dependency logs the error correctly
* middleware - development errors when there is an unhandled rejection while loading a dependency does not render the error
* middleware - development errors when there is a compilation error after boot renders the error correctly and recovers

test/e2e/app-dir/app-a11y/index.test.ts
* app a11y features route announcer should not announce the initital title
* app a11y features route announcer should announce document.title changes
* app a11y features route announcer should announce h1 changes
* app a11y features route announcer should announce route changes when h1 changes inside an inner layout

test/e2e/app-dir/app-alias/app-alias.test.ts
* app-dir alias should handle typescript paths alias correctly
* app-dir alias should resolve css imports from outside with src folder presented

test/e2e/app-dir/app-basepath/index.test.ts
* app dir - basepath should support \`basePath\`
* app dir - basepath should support Link with basePath prefixed
* app dir - basepath should prefix redirect() with basePath
* app dir - basepath should render usePathname without the basePath

test/e2e/app-dir/app-client-cache/client-cache.test.ts
* app dir client cache semantics should skip dev

test/e2e/app-dir/app-compilation/index.test.ts
* app dir HMR should not cause error when removing loading.js

test/e2e/app-dir/app-css-pageextensions/index.test.ts
* app dir css with pageextensions css support with pageextensions page in app directory with pageextention, css should work should support global css inside layout

test/e2e/app-dir/app-edge-root-layout/index.test.ts
* app-dir edge runtime root layout should not emit metadata files into bad paths

test/e2e/app-dir/app-external/app-external.test.ts
* app dir - external dependency should handle external async module libraries correctly
* app dir - external dependency should transpile specific external packages with the \`transpilePackages\` option
* app dir - external dependency should resolve the subset react in server components based on the react-server condition
* app dir - external dependency should resolve 3rd party package exports based on the react-server condition
* app dir - external dependency should correctly collect global css imports and mark them as side effects
* app dir - external dependency should handle external css modules
* app dir - external dependency should use the same export type for packages in both ssr and client
* app dir - external dependency should handle external css modules in pages
* app dir - external dependency should handle external next/font
* app dir - external dependency react in external esm packages should use the same react in client app
* app dir - external dependency react in external esm packages should use the same react in server app
* app dir - external dependency react in external esm packages should use the same react in edge server app
* app dir - external dependency react in external esm packages should use the same react in pages
* app dir - external dependency should export client module references in esm
* app dir - external dependency should support exporting multiple star re-exports
* app dir - external dependency should use the same async storages if imported directly

test/e2e/app-dir/app-fetch-deduping/app-fetch-deduping.test.ts
* app-fetch-deduping during next dev should dedupe requests called from the same component

test/e2e/app-dir/app-edge/app-edge.test.ts
* app-dir edge SSR should resolve module without error in edge runtime

test/e2e/app-dir/app-prefetch-static/app-prefetch-static.test.ts
* app-prefetch-static should skip next dev

test/e2e/app-dir/app-prefetch/prefetching.test.ts
* app dir prefetching should skip next dev for now

test/e2e/app-dir/app-routes-trailing-slash/app-routes-trailing-slash.test.ts
* app-routes-trailing-slash should handle trailing slash for edge runtime
* app-routes-trailing-slash should handle trailing slash for node runtime

test/e2e/app-dir/app-routes/app-custom-route-base-path.test.ts
* app-custom-routes works with api prefix correctly statically generates correctly with no dynamic usage
* app-custom-routes works with api prefix correctly does not statically generate with dynamic usage
* app-custom-routes works with generateStaticParams correctly responds correctly on /static/first/data.json
* app-custom-routes works with generateStaticParams correctly responds correctly on /static/second/data.json
* app-custom-routes works with generateStaticParams correctly responds correctly on /static/three/data.json
* app-custom-routes works with generateStaticParams correctly revalidates correctly on /revalidate-1/first/data.json
* app-custom-routes works with generateStaticParams correctly revalidates correctly on /revalidate-1/second/data.json
* app-custom-routes works with generateStaticParams correctly revalidates correctly on /revalidate-1/three/data.json
* app-custom-routes basic fetch request with a response made via a GET request responds correctly on /basic/endpoint
* app-custom-routes basic fetch request with a response made via a GET request responds correctly on /basic/vercel/endpoint
* app-custom-routes basic fetch request with a response made via a POST request responds correctly on /basic/endpoint
* app-custom-routes basic fetch request with a response made via a POST request responds correctly on /basic/vercel/endpoint
* app-custom-routes basic fetch request with a response made via a PUT request responds correctly on /basic/endpoint
* app-custom-routes basic fetch request with a response made via a PUT request responds correctly on /basic/vercel/endpoint
* app-custom-routes basic fetch request with a response made via a DELETE request responds correctly on /basic/endpoint
* app-custom-routes basic fetch request with a response made via a DELETE request responds correctly on /basic/vercel/endpoint
* app-custom-routes basic fetch request with a response made via a PATCH request responds correctly on /basic/endpoint
* app-custom-routes basic fetch request with a response made via a PATCH request responds correctly on /basic/vercel/endpoint
* app-custom-routes basic fetch request with a response route groups routes to the correct handler
* app-custom-routes basic fetch request with a response request can read query parameters
* app-custom-routes basic fetch request with a response request can read query parameters (edge)
* app-custom-routes basic fetch request with a response response supports the NextResponse.redirect() helper
* app-custom-routes basic fetch request with a response response supports the NextResponse.json() helper
* app-custom-routes body can handle handle a streaming request and streaming response
* app-custom-routes body can handle handle a streaming request and streaming response (edge)
* app-custom-routes body can read a JSON encoded body
* app-custom-routes body can read a JSON encoded body (edge)
* app-custom-routes body can read a JSON encoded body for DELETE requests
* app-custom-routes body can read a JSON encoded body for OPTIONS requests
* app-custom-routes body can read a streamed JSON encoded body
* app-custom-routes body can read a streamed JSON encoded body (edge)
* app-custom-routes body can read the text body
* app-custom-routes body can read the text body (edge)
* app-custom-routes context provides params to routes with dynamic parameters
* app-custom-routes context provides params to routes with catch-all routes
* app-custom-routes context does not provide params to routes without dynamic parameters
* app-custom-routes hooks headers gets the correct values
* app-custom-routes hooks cookies gets the correct values
* app-custom-routes hooks cookies().has() gets the correct values
* app-custom-routes hooks redirect can respond correctly
* app-custom-routes hooks permanentRedirect can respond correctly
* app-custom-routes hooks notFound can respond correctly
* app-custom-routes error conditions responds with 400 (Bad Request) when the requested method is not a valid HTTP method
* app-custom-routes error conditions responds with 405 (Method Not Allowed) when method is not implemented
* app-custom-routes error conditions responds with 500 (Internal Server Error) when the handler throws an error
* app-custom-routes error conditions responds with 500 (Internal Server Error) when the handler calls NextResponse.next()
* app-custom-routes automatic implementations implements HEAD on routes with GET already implemented
* app-custom-routes automatic implementations implements OPTIONS on routes
* app-custom-routes edge functions returns response using edge runtime
* app-custom-routes edge functions returns a response when headers are accessed
* app-custom-routes dynamic = "force-static" strips search, headers, and domain from request
* app-custom-routes customized metadata routes should work if conflict with metadata routes convention
* app-custom-routes invalid exports should print an error when exporting a default handler in dev
* app-custom-routes no response returned should print an error when no response is returned

test/e2e/app-dir/app-rendering/rendering.test.ts
* app dir rendering should serve app/page.server.js at /
* app dir rendering SSR only should run data in layout and page
* app dir rendering SSR only should run data fetch in parallel
* app dir rendering static only should run data in layout and page
* app dir rendering static only should run data in parallel during development
* app dir rendering ISR should revalidate the page when revalidate is configured

test/e2e/app-dir/app-simple-routes/app-simple-routes.test.ts
* app-simple-routes works with simple routes renders a node route
* app-simple-routes works with simple routes renders a edge route

test/e2e/app-dir/app-middleware/app-middleware.test.ts
* app dir middleware without pages dir Updates headers

test/e2e/app-dir/app-routes/app-custom-routes.test.ts
* app-custom-routes works with api prefix correctly statically generates correctly with no dynamic usage
* app-custom-routes works with api prefix correctly does not statically generate with dynamic usage
* app-custom-routes works with generateStaticParams correctly responds correctly on /static/first/data.json
* app-custom-routes works with generateStaticParams correctly responds correctly on /static/second/data.json
* app-custom-routes works with generateStaticParams correctly responds correctly on /static/three/data.json
* app-custom-routes works with generateStaticParams correctly revalidates correctly on /revalidate-1/first/data.json
* app-custom-routes works with generateStaticParams correctly revalidates correctly on /revalidate-1/second/data.json
* app-custom-routes works with generateStaticParams correctly revalidates correctly on /revalidate-1/three/data.json
* app-custom-routes basic fetch request with a response made via a GET request responds correctly on /basic/endpoint
* app-custom-routes basic fetch request with a response made via a GET request responds correctly on /basic/vercel/endpoint
* app-custom-routes basic fetch request with a response made via a POST request responds correctly on /basic/endpoint
* app-custom-routes basic fetch request with a response made via a POST request responds correctly on /basic/vercel/endpoint
* app-custom-routes basic fetch request with a response made via a PUT request responds correctly on /basic/endpoint
* app-custom-routes basic fetch request with a response made via a PUT request responds correctly on /basic/vercel/endpoint
* app-custom-routes basic fetch request with a response made via a DELETE request responds correctly on /basic/endpoint
* app-custom-routes basic fetch request with a response made via a DELETE request responds correctly on /basic/vercel/endpoint
* app-custom-routes basic fetch request with a response made via a PATCH request responds correctly on /basic/endpoint
* app-custom-routes basic fetch request with a response made via a PATCH request responds correctly on /basic/vercel/endpoint
* app-custom-routes basic fetch request with a response route groups routes to the correct handler
* app-custom-routes basic fetch request with a response request can read query parameters
* app-custom-routes basic fetch request with a response request can read query parameters (edge)
* app-custom-routes basic fetch request with a response response supports the NextResponse.redirect() helper
* app-custom-routes basic fetch request with a response response supports the NextResponse.json() helper
* app-custom-routes body can handle handle a streaming request and streaming response
* app-custom-routes body can handle handle a streaming request and streaming response (edge)
* app-custom-routes body can read a JSON encoded body
* app-custom-routes body can read a JSON encoded body (edge)
* app-custom-routes body can read a JSON encoded body for DELETE requests
* app-custom-routes body can read a JSON encoded body for OPTIONS requests
* app-custom-routes body can read a streamed JSON encoded body
* app-custom-routes body can read a streamed JSON encoded body (edge)
* app-custom-routes body can read the text body
* app-custom-routes body can read the text body (edge)
* app-custom-routes context provides params to routes with dynamic parameters
* app-custom-routes context provides params to routes with catch-all routes
* app-custom-routes context does not provide params to routes without dynamic parameters
* app-custom-routes hooks headers gets the correct values
* app-custom-routes hooks cookies gets the correct values
* app-custom-routes hooks cookies().has() gets the correct values
* app-custom-routes hooks redirect can respond correctly
* app-custom-routes hooks permanentRedirect can respond correctly
* app-custom-routes hooks notFound can respond correctly
* app-custom-routes error conditions responds with 400 (Bad Request) when the requested method is not a valid HTTP method
* app-custom-routes error conditions responds with 405 (Method Not Allowed) when method is not implemented
* app-custom-routes error conditions responds with 500 (Internal Server Error) when the handler throws an error
* app-custom-routes error conditions responds with 500 (Internal Server Error) when the handler calls NextResponse.next()
* app-custom-routes automatic implementations implements HEAD on routes with GET already implemented
* app-custom-routes automatic implementations implements OPTIONS on routes
* app-custom-routes edge functions returns response using edge runtime
* app-custom-routes edge functions returns a response when headers are accessed
* app-custom-routes dynamic = "force-static" strips search, headers, and domain from request
* app-custom-routes customized metadata routes should work if conflict with metadata routes convention
* app-custom-routes invalid exports should print an error when exporting a default handler in dev
* app-custom-routes no response returned should print an error when no response is returned

test/e2e/app-dir/app-static/app-static-custom-cache-handler-esm.test.ts
* app-static-custom-cache-handler-esm should skip

test/e2e/app-dir/app-static/app-fetch-logging.test.ts
* app-dir - data fetching with cache logging with verbose logging should only log requests in dev mode
* app-dir - data fetching with cache logging with verbose logging should log 'skip' cache status with a reason when cache: 'no-cache' is used
* app-dir - data fetching with cache logging with verbose logging should log 'skip' cache status with a reason when revalidate: 0 is used
* app-dir - data fetching with cache logging with verbose logging should log 'skip' cache status with a reason when the browser indicates caching should be ignored
* app-dir - data fetching with cache logging with verbose logging for edge runtime should not log fetch requests at all
* app-dir - data fetching with cache logging with default logging should not log fetch requests at all

test/e2e/app-dir/app-validation/validation.test.ts
* app dir validation should error when passing invalid router state tree

test/e2e/app-dir/app/experimental-compile.test.ts
* should skip

test/e2e/app-dir/app/standalone.test.ts
* should skip for non-next start

test/e2e/app-dir/app/useReportWebVitals.test.ts
* useReportWebVitals hook should send web-vitals to vercel-insights

test/e2e/app-dir/asset-prefix/asset-prefix.test.ts
* app-dir assetPrefix handling should redirect route when requesting it directly
* app-dir assetPrefix handling should render link
* app-dir assetPrefix handling should redirect route when requesting it directly by browser
* app-dir assetPrefix handling should redirect route when clicking link

test/e2e/app-dir/async-component-preload/async-component-preload.test.ts
* async-component-preload should handle redirect in an async page

test/e2e/app-dir/autoscroll-with-css-modules/index.test.ts
* router autoscrolling on navigation with css modules vertical scroll when page imports css modules should scroll to top of document when navigating between to pages without layout when
* router autoscrolling on navigation with css modules vertical scroll when page imports css modules should scroll when clicking in JS

test/e2e/app-dir/build-size/index.test.ts
* app-dir build size should skip next dev for now

test/e2e/app-dir/app-css/index.test.ts
* app dir css css support server layouts should support css modules inside server layouts
* app dir css css support server pages should support global css inside server pages
* app dir css css support server pages should support css modules inside server pages
* app dir css css support server pages should not contain pages css in app dir page
* app dir css css support client layouts should support css modules inside client layouts
* app dir css css support client layouts should support global css inside client layouts
* app dir css css support client pages should support css modules inside client pages
* app dir css css support client pages should support global css inside client pages
* app dir css css support client components should support css modules inside client page
* app dir css css support client components should support css modules inside client components
* app dir css css support special entries should include css imported in client template.js
* app dir css css support special entries should include css imported in server template.js
* app dir css css support special entries should include css imported in client not-found.js
* app dir css css support special entries should include css imported in server not-found.js
* app dir css css support special entries should include root layout css for root not-found.js
* app dir css css support special entries should include css imported in root not-found.js
* app dir css css support special entries should include css imported in error.js
* app dir css css support page extensions should include css imported in MDX pages
* app dir css css support css ordering should have inner layers take precedence over outer layers
* app dir css css support should not affect css orders during HMR
* app dir css sass support server layouts should support global sass/scss inside server layouts
* app dir css sass support server layouts should support sass/scss modules inside server layouts
* app dir css sass support server pages should support global sass/scss inside server pages
* app dir css sass support server pages should support sass/scss modules inside server pages
* app dir css sass support client layouts should support global sass/scss inside client layouts
* app dir css sass support client layouts should support sass/scss modules inside client layouts
* app dir css sass support client pages should support global sass/scss inside client pages
* app dir css sass support client pages should support sass/scss modules inside client pages
* app dir css HMR should support HMR for CSS imports in client components
* app dir css HMR should not break HMR when CSS is imported in a server component
* app dir css Suspensey CSS should suspend on CSS imports if its slow on client navigation

test/e2e/app-dir/crypto-globally-available/crypto-globally-available.test.ts
* Web Crypto API is available globally should be available in Server Components
* Web Crypto API is available globally should be available in Route Handlers

test/e2e/app-dir/draft-mode/draft-mode.test.ts
* app dir - draft mode in nodejs runtime should use initial rand when draft mode is disabled on /index
* app dir - draft mode in nodejs runtime should use initial rand when draft mode is disabled on /with-cookies
* app dir - draft mode in nodejs runtime should be disabled from api route handler
* app dir - draft mode in nodejs runtime should have set-cookie header on enable
* app dir - draft mode in nodejs runtime should have set-cookie header with redirect location
* app dir - draft mode in nodejs runtime should genenerate rand when draft mode enabled
* app dir - draft mode in nodejs runtime should read other cookies when draft mode enabled
* app dir - draft mode in nodejs runtime should be enabled from api route handler when draft mode enabled
* app dir - draft mode in nodejs runtime should not perform full page navigation on router.refresh()
* app dir - draft mode in edge runtime should be disabled from api route handler
* app dir - draft mode in edge runtime should have set-cookie header on enable
* app dir - draft mode in edge runtime should have set-cookie header with redirect location
* app dir - draft mode in edge runtime should be enabled from api route handler when draft mode enabled
* app dir - draft mode in edge runtime should not perform full page navigation on router.refresh()

test/e2e/app-dir/dynamic-href/dynamic-href.test.ts
* dynamic-href should error when using dynamic href.pathname in app dir
* dynamic-href should error when using dynamic href in app dir

test/e2e/app-dir/app-static/app-static-custom-handler.test.ts
* app-dir static/dynamic handling should correctly include headers instance in cache key
* app-dir static/dynamic handling unstable-cache should work in pages/unstable-cache-node
* app-dir static/dynamic handling unstable-cache should work in pages/api/unstable-cache-node
* app-dir static/dynamic handling unstable-cache should work in pages/api/unstable-cache-edge
* app-dir static/dynamic handling should not have cache tags header for non-minimal mode
* app-dir static/dynamic handling should error correctly for invalid params from generateStaticParams
* app-dir static/dynamic handling should correctly handle multi-level generateStaticParams when some levels are missing
* app-dir static/dynamic handling should correctly skip caching POST fetch for POST handler
* app-dir static/dynamic handling should correctly handle fetchCache = "force-no-store"
* app-dir static/dynamic handling should not cache non-ok statusCode
* app-dir static/dynamic handling should stream properly for /stale-cache-serving/app-page
* app-dir static/dynamic handling should stream properly for /stale-cache-serving/route-handler
* app-dir static/dynamic handling should stream properly for /stale-cache-serving-edge/app-page
* app-dir static/dynamic handling should stream properly for /stale-cache-serving-edge/route-handler
* app-dir static/dynamic handling should cache correctly for fetchCache = default-cache
* app-dir static/dynamic handling should cache correctly for fetchCache = force-cache
* app-dir static/dynamic handling should cache correctly for cache: no-store
* app-dir static/dynamic handling should bypass fetch cache with cache-control: no-cache
* app-dir static/dynamic handling should skip cache in draft mode
* app-dir static/dynamic handling should handle partial-gen-params with default dynamicParams correctly
* app-dir static/dynamic handling should handle partial-gen-params with layout dynamicParams = false correctly
* app-dir static/dynamic handling should handle partial-gen-params with page dynamicParams = false correctly
* app-dir static/dynamic handling should honor fetch cache correctly
* app-dir static/dynamic handling should cache correctly with authorization header and revalidate
* app-dir static/dynamic handling should cache correctly with post method and revalidate
* app-dir static/dynamic handling should cache correctly with POST method and revalidate
* app-dir static/dynamic handling should cache correctly with cookie header and revalidate
* app-dir static/dynamic handling should cache correctly with utf8 encoding
* app-dir static/dynamic handling should not throw Dynamic Server Usage error when using generateStaticParams with draftMode
* app-dir static/dynamic handling should force SSR correctly for headers usage
* app-dir static/dynamic handling should allow dynamic routes to access cookies
* app-dir static/dynamic handling should not error with generateStaticParams and dynamic data
* app-dir static/dynamic handling should not error with force-dynamic and catch-all routes
* app-dir static/dynamic handling should not error with generateStaticParams and authed data on revalidate
* app-dir static/dynamic handling should handle dynamicParams: false correctly
* app-dir static/dynamic handling should work with forced dynamic path
* app-dir static/dynamic handling should work with dynamic path no generateStaticParams
* app-dir static/dynamic handling should handle dynamicParams: true correctly
* app-dir static/dynamic handling should navigate to static path correctly
* app-dir static/dynamic handling should ssr dynamically when detected automatically with fetch cache option
* app-dir static/dynamic handling should ssr dynamically when forced via config
* app-dir static/dynamic handling useSearchParams client should bailout to client rendering - without suspense boundary
* app-dir static/dynamic handling useSearchParams client should bailout to client rendering - with suspense boundary
* app-dir static/dynamic handling useSearchParams client should have values from canonical url on rewrite
* app-dir static/dynamic handling usePathname should have the correct values
* app-dir static/dynamic handling usePathname should have values from canonical url on rewrite
* app-dir static/dynamic handling should keep querystring on static page
* app-dir static/dynamic handling should have logs from cache-handler

test/e2e/app-dir/app-static/app-static.test.ts
* app-dir static/dynamic handling should correctly include headers instance in cache key
* app-dir static/dynamic handling unstable-cache should work in pages/unstable-cache-node
* app-dir static/dynamic handling unstable-cache should work in pages/api/unstable-cache-node
* app-dir static/dynamic handling unstable-cache should work in pages/api/unstable-cache-edge
* app-dir static/dynamic handling should not have cache tags header for non-minimal mode
* app-dir static/dynamic handling should error correctly for invalid params from generateStaticParams
* app-dir static/dynamic handling should correctly handle multi-level generateStaticParams when some levels are missing
* app-dir static/dynamic handling should correctly skip caching POST fetch for POST handler
* app-dir static/dynamic handling it should revalidate tag correctly with edge route handler
* app-dir static/dynamic handling it should revalidate tag correctly with node route handler
* app-dir static/dynamic handling should correctly handle fetchCache = "force-no-store"
* app-dir static/dynamic handling should revalidate correctly with config and fetch revalidate
* app-dir static/dynamic handling should not cache non-ok statusCode
* app-dir static/dynamic handling should stream properly for /stale-cache-serving/app-page
* app-dir static/dynamic handling should stream properly for /stale-cache-serving/route-handler
* app-dir static/dynamic handling should stream properly for /stale-cache-serving-edge/app-page
* app-dir static/dynamic handling should stream properly for /stale-cache-serving-edge/route-handler
* app-dir static/dynamic handling should cache correctly for fetchCache = default-cache
* app-dir static/dynamic handling should cache correctly for fetchCache = force-cache
* app-dir static/dynamic handling should cache correctly for cache: no-store
* app-dir static/dynamic handling should bypass fetch cache with cache-control: no-cache
* app-dir static/dynamic handling should skip cache in draft mode
* app-dir static/dynamic handling should handle partial-gen-params with default dynamicParams correctly
* app-dir static/dynamic handling should handle partial-gen-params with layout dynamicParams = false correctly
* app-dir static/dynamic handling should handle partial-gen-params with page dynamicParams = false correctly
* app-dir static/dynamic handling should honor fetch cache in generateStaticParams
* app-dir static/dynamic handling should honor fetch cache correctly
* app-dir static/dynamic handling should cache correctly with authorization header and revalidate
* app-dir static/dynamic handling should cache correctly with post method and revalidate
* app-dir static/dynamic handling should cache correctly with POST method and revalidate
* app-dir static/dynamic handling should cache correctly with cookie header and revalidate
* app-dir static/dynamic handling should cache correctly with utf8 encoding
* app-dir static/dynamic handling should not throw Dynamic Server Usage error when using generateStaticParams with draftMode
* app-dir static/dynamic handling should force SSR correctly for headers usage
* app-dir static/dynamic handling should allow dynamic routes to access cookies
* app-dir static/dynamic handling should not error with generateStaticParams and dynamic data
* app-dir static/dynamic handling should not error with force-dynamic and catch-all routes
* app-dir static/dynamic handling should not error with generateStaticParams and authed data on revalidate
* app-dir static/dynamic handling should honor dynamic = "force-static" correctly
* app-dir static/dynamic handling should honor dynamic = "force-static" correctly (lazy)
* app-dir static/dynamic handling should handle dynamicParams: false correctly
* app-dir static/dynamic handling should work with forced dynamic path
* app-dir static/dynamic handling should work with dynamic path no generateStaticParams
* app-dir static/dynamic handling should handle dynamicParams: true correctly
* app-dir static/dynamic handling should navigate to static path correctly
* app-dir static/dynamic handling should ssr dynamically when detected automatically with fetch cache option
* app-dir static/dynamic handling should ssr dynamically when forced via config
* app-dir static/dynamic handling useSearchParams client should bailout to client rendering - without suspense boundary
* app-dir static/dynamic handling useSearchParams client should bailout to client rendering - with suspense boundary
* app-dir static/dynamic handling useSearchParams client should have values from canonical url on rewrite
* app-dir static/dynamic handling usePathname should have the correct values
* app-dir static/dynamic handling usePathname should have values from canonical url on rewrite
* app-dir static/dynamic handling should keep querystring on static page

test/e2e/app-dir/error-boundary-navigation/index.test.ts
* app dir - not found navigation should allow navigation on not-found
* app dir - not found navigation should allow navigation on error
* app dir - not found navigation should allow navigation to other routes on route that was initially not-found
* app dir - not found navigation should allow navigation back to route that was initially not-found
* app dir - not found navigation should allow navigating to a page calling notfound
* app dir - not found navigation should allow navigating to a non-existent page
* app dir - not found navigation should be able to navigate to other page from root not-found page

test/e2e/app-dir/dynamic/dynamic.test.ts
* app dir - next/dynamic should handle next/dynamic in hydration correctly
* app dir - next/dynamic should generate correct client manifest for dynamic chunks

test/e2e/app-dir/global-error/layout-error/index.test.ts
* app dir - global error - layout error should render global error for error in server components

test/e2e/app-dir/front-redirect-issue/front-redirect-issue.test.ts
* app dir - front redirect issue should redirect

test/e2e/app-dir/global-error/basic/index.test.ts
* app dir - global error should trigger error component when an error happens during rendering
* app dir - global error should render global error for error in server components
* app dir - global error should render global error for error in client components
* app dir - global error should catch metadata error in error boundary if presented
* app dir - global error should catch metadata error in global-error if no error boundary is presented

test/e2e/app-dir/headers-static-bailout/headers-static-bailout.test.ts
* headers-static-bailout should skip

test/e2e/app-dir/hello-world/hello-world.test.ts
* hello-world should work using cheerio
* hello-world should work using browser
* hello-world should work with html
* hello-world should work with fetch

test/e2e/app-dir/i18n-hybrid/i18n-hybrid.test.js
* i18n-hybrid does not resolve /en-CA/blog/first-post
* i18n-hybrid does not resolve /en-US/blog/first-post
* i18n-hybrid does not resolve /fr-CA/blog/first-post
* i18n-hybrid does not resolve /fr-FR/blog/first-post
* i18n-hybrid does resolve /blog/first-post
* i18n-hybrid does resolve /about
* i18n-hybrid does resolve /en-CA/about
* i18n-hybrid does resolve /en-US/about
* i18n-hybrid does resolve /fr-CA/about
* i18n-hybrid does resolve /fr-FR/about

test/e2e/app-dir/import/import.test.ts
* app dir imports we can import all components from .js
* app dir imports we can import all components from .jsx
* app dir imports we can import all components from .ts
* app dir imports we can import all components from .tsx

test/e2e/app-dir/error-boundary-navigation/override-node-env.test.ts
* app dir - not found navigation should allow navigation on not-found
* app dir - not found navigation should allow navigation on error
* app dir - not found navigation should allow navigation to other routes on route that was initially not-found
* app dir - not found navigation should allow navigation back to route that was initially not-found
* app dir - not found navigation should allow navigating to a page calling notfound
* app dir - not found navigation should allow navigating to a non-existent page
* app dir - not found navigation should be able to navigate to other page from root not-found page
* app dir - not found navigation - with overridden node env should allow navigation on not-found
* app dir - not found navigation - with overridden node env should allow navigation on error
* app dir - not found navigation - with overridden node env should allow navigation to other routes on route that was initially not-found
* app dir - not found navigation - with overridden node env should allow navigation back to route that was initially not-found
* app dir - not found navigation - with overridden node env should allow navigating to a page calling notfound
* app dir - not found navigation - with overridden node env should allow navigating to a non-existent page
* app dir - not found navigation - with overridden node env should be able to navigate to other page from root not-found page

test/e2e/app-dir/hooks/hooks.test.ts
* app dir - hooks from pages should have the correct hooks
* app dir - hooks from pages should have the correct hooks
* app dir - hooks from pages should have the correct hooks
* app dir - hooks from pages should have the correct hooks
* app dir - hooks from pages should have the correct hooks
* app dir - hooks from pages should have the correct hooks
* app dir - hooks from pages should have the correct hooks
* app dir - hooks from pages should have the correct hooks
* app dir - hooks usePathname should have the correct pathname
* app dir - hooks usePathname should have the canonical url pathname on rewrite
* app dir - hooks useSearchParams should have the correct search params
* app dir - hooks useSearchParams should have the canonical url search params on rewrite
* app dir - hooks useDraftMode should use initial rand when draft mode be disabled
* app dir - hooks useDraftMode should genenerate rand when draft mode enabled
* app dir - hooks useRouter should allow access to the router
* app dir - hooks useSelectedLayoutSegments should have the correct layout segments at /hooks/use-selected-layout-segment/first
* app dir - hooks useSelectedLayoutSegments should have the correct layout segments at /hooks/use-selected-layout-segment/first/slug1
* app dir - hooks useSelectedLayoutSegments should have the correct layout segments at /hooks/use-selected-layout-segment/first/slug2/second
* app dir - hooks useSelectedLayoutSegments should have the correct layout segments at /hooks/use-selected-layout-segment/first/slug2/second/a/b
* app dir - hooks useSelectedLayoutSegments should have the correct layout segments at /hooks/use-selected-layout-segment/rewritten
* app dir - hooks useSelectedLayoutSegments should have the correct layout segments at /hooks/use-selected-layout-segment/rewritten-middleware
* app dir - hooks useSelectedLayoutSegments should return an empty array in pages
* app dir - hooks useSelectedLayoutSegment should have the correct layout segment at /hooks/use-selected-layout-segment/first
* app dir - hooks useSelectedLayoutSegment should have the correct layout segment at /hooks/use-selected-layout-segment/first/slug1
* app dir - hooks useSelectedLayoutSegment should have the correct layout segment at /hooks/use-selected-layout-segment/first/slug2/second/a/b
* app dir - hooks useSelectedLayoutSegment should return null in pages

test/e2e/app-dir/layout-params/layout-params.test.ts
* app dir - layout params basic params check layout without params get no params
* app dir - layout params basic params check layout renders just it's params
* app dir - layout params basic params check topmost layout renders all params
* app dir - layout params catchall params should give catchall params just to last layout
* app dir - layout params catchall params should give optional catchall params just to last layout
* app dir - layout params catchall params should give empty optional catchall params won't give params to any layout

test/e2e/app-dir/interoperability-with-pages/navigation.test.ts
* navigation between pages and app dir It should be able to navigate app -> pages
* navigation between pages and app dir It should be able to navigate pages -> app
* navigation between pages and app dir It should be able to navigate pages -> app and go back an forward
* navigation between pages and app dir It should be able to navigate app -> pages and go back and forward

test/e2e/app-dir/metadata-missing-metadata-base/index.test.ts
* app dir - metadata missing metadataBase should fallback to localhost if metadataBase is missing for absolute urls resolving

test/e2e/app-dir/mdx/mdx.test.ts
* mdx with-mdx-rs app directory should work in initial html
* mdx with-mdx-rs app directory should work using browser
* mdx with-mdx-rs app directory should work in initial html with mdx import
* mdx with-mdx-rs app directory should work using browser with mdx import
* mdx with-mdx-rs app directory should allow overriding components
* mdx with-mdx-rs pages directory should work in initial html
* mdx with-mdx-rs pages directory should work using browser
* mdx with-mdx-rs pages directory should work in initial html with mdx import
* mdx with-mdx-rs pages directory should work using browser with mdx import
* mdx with-mdx-rs pages directory should allow overriding components

test/e2e/app-dir/metadata-suspense/index.test.ts
* app dir - metadata dynamic routes should render metadata in head even root layout is wrapped with Suspense

test/e2e/app-dir/next-config/index.test.ts
* app dir - next config should support importing webpack in next.config

test/e2e/app-dir/metadata-dynamic-routes/index.test.ts
* app dir - metadata dynamic routes text routes should handle robots.[ext] dynamic routes
* app dir - metadata dynamic routes social image routes should handle manifest.[ext] dynamic routes
* app dir - metadata dynamic routes social image routes should render og image with opengraph-image dynamic routes
* app dir - metadata dynamic routes social image routes should render og image with twitter-image dynamic routes
* app dir - metadata dynamic routes social image routes should support generate multi images with generateImageMetadata
* app dir - metadata dynamic routes social image routes should fill params into dynamic routes url of metadata images
* app dir - metadata dynamic routes icon image routes should render icon with dynamic routes
* app dir - metadata dynamic routes icon image routes should render apple icon with dynamic routes
* app dir - metadata dynamic routes should pick configured metadataBase instead of deployment url for canonical url
* app dir - metadata dynamic routes should inject dynamic metadata properly to head
* app dir - metadata dynamic routes should use localhost for local prod and fallback to deployment url when metadataBase is falsy
* app dir - metadata dynamic routes should error when id is missing in generateImageMetadata

test/e2e/app-dir/next-image/next-image-https.test.ts
* app dir next-image (with https) only runs on CI as it requires administrator privileges

test/e2e/app-dir/navigation/navigation.test.ts
* app dir - navigation query string should set query correctly
* app dir - navigation query string should handle unicode search params
* app dir - navigation hash should scroll to the specified hash
* app dir - navigation hash should not scroll to hash when scroll={false} is set
* app dir - navigation hash-with-scroll-offset should scroll to the specified hash
* app dir - navigation hash-link-back-to-same-page should scroll to the specified hash
* app dir - navigation relative hashes and queries should work with a hash-only href
* app dir - navigation relative hashes and queries should work with a hash-only \`router.push(...)\`
* app dir - navigation relative hashes and queries should work with a query-only href
* app dir - navigation relative hashes and queries should work with both relative hashes and queries
* app dir - navigation not-found should trigger not-found in a server component
* app dir - navigation not-found should trigger not-found in a client component
* app dir - navigation not-found should trigger not-found client-side
* app dir - navigation not-found should trigger not-found while streaming
* app dir - navigation bots should block rendering for bots and return 404 status
* app dir - navigation redirect components should redirect in a server component
* app dir - navigation redirect components should redirect in a client component
* app dir - navigation redirect components should redirect client-side
* app dir - navigation redirect components should redirect to external url
* app dir - navigation redirect components should redirect to external url, initiating only once
* app dir - navigation redirect next.config.js redirects should redirect from next.config.js
* app dir - navigation redirect next.config.js redirects should redirect from next.config.js with link navigation
* app dir - navigation redirect middleware redirects should redirect from middleware
* app dir - navigation redirect middleware redirects should redirect from middleware with link navigation
* app dir - navigation redirect status code should respond with 307 status code in server component
* app dir - navigation redirect status code should respond with 307 status code in client component
* app dir - navigation redirect status code should respond with 308 status code if permanent flag is set
* app dir - navigation external push should push external url without affecting hooks
* app dir - navigation navigation between pages and app should not contain _rsc query while navigating from app to pages
* app dir - navigation navigation between pages and app should not contain _rsc query while navigating from pages to app
* app dir - navigation navigation between pages and app should not omit the hash while navigating from app to pages
* app dir - navigation nested navigation should navigate to nested pages
* app dir - navigation SEO should emit noindex meta tag for not found page when streaming
* app dir - navigation SEO should emit refresh meta tag for redirect page when streaming
* app dir - navigation SEO should emit refresh meta tag (permanent) for redirect page when streaming
* app dir - navigation SEO should contain default meta tags in error page
* app dir - navigation SEO should not log 404 errors in ipc server
* app dir - navigation navigations when attaching a Proxy to \`window.Promise\` should navigate without issue

test/e2e/app-dir/metadata/metadata.test.ts
* app dir - metadata basic should support title and description
* app dir - metadata basic should support title template
* app dir - metadata basic should support stashed title in one layer of page and layout
* app dir - metadata basic should use parent layout title when no title is defined in page
* app dir - metadata basic should support stashed title in two layers of page and layout
* app dir - metadata basic should support other basic tags
* app dir - metadata basic should support apple related tags \`itunes\` and \`appWebApp\`
* app dir - metadata basic should support alternate tags
* app dir - metadata basic should relative canonical url
* app dir - metadata basic should support robots tags
* app dir - metadata basic should support verification tags
* app dir - metadata basic should support appLinks tags
* app dir - metadata basic should apply metadata when navigating client-side
* app dir - metadata basic should support generateMetadata export
* app dir - metadata basic should handle metadataBase for urls resolved as only URL type
* app dir - metadata opengraph should support opengraph tags
* app dir - metadata opengraph should support opengraph with article type
* app dir - metadata opengraph should override file based images when opengraph-image and twitter-image specify images property
* app dir - metadata navigation should render root not-found with default metadata
* app dir - metadata navigation should support notFound in generateMetadata
* app dir - metadata navigation should support redirect in generateMetadata
* app dir - metadata icons should support basic object icons field
* app dir - metadata icons should support basic string icons field
* app dir - metadata icons should support basic complex descriptor icons field
* app dir - metadata icons should merge icons from layout if no static icons files are specified
* app dir - metadata icons should not hoist meta[itemProp] to head
* app dir - metadata twitter should support twitter card summary_large_image when image present
* app dir - metadata twitter should render twitter card summary when image is not present
* app dir - metadata twitter should support default twitter player card
* app dir - metadata twitter should support default twitter app card
* app dir - metadata static routes should have /favicon.ico as route
* app dir - metadata static routes should support root dir robots.txt
* app dir - metadata static routes should support sitemap.xml under every routes
* app dir - metadata static routes should support static manifest.webmanifest
* app dir - metadata react cache should have same title and page value on initial load
* app dir - metadata react cache should have same title and page value when navigating
* app dir - metadata should not effect metadata images convention like files under pages directory

test/e2e/app-dir/not-found/conflict-route/index.test.ts
* app dir - not-found - conflict route with default runtime should use the not-found page for non-matching routes

test/e2e/app-dir/not-found/css-precedence/index.test.ts
* not-found app dir css should load css while navigation between not-found and page

test/e2e/app-dir/not-found/group-route-root-not-found/index.test.ts
* app dir - group routes with root not-found should render default 404 with root layout for non-existent page
* app dir - group routes with root not-found should render root not found for group routes if hit 404

test/e2e/app-dir/next-image/next-image.test.ts
* app dir next-image image content should render images on /client route
* app dir next-image image content should render images nested under page dir on /nested route
* app dir next-image image content should render legacy images under /legacy route

test/e2e/app-dir/not-found/group-route/index.test.ts
* app dir - not-found - group route with default runtime should use the not-found page under group routes

test/e2e/app-dir/pages-to-app-routing/pages-to-app-routing.test.ts
* pages-to-app-routing should work using browser

test/e2e/app-dir/params-hooks-compat/index.test.ts
* app-dir - params hooks compat should only access search params with useSearchParams
* app-dir - params hooks compat should only access path params with useParams

test/e2e/app-dir/rewrites-redirects/rewrites-redirects.test.ts
* redirects and rewrites navigation using link should rewrite from middleware correctly
* redirects and rewrites navigation using link should redirect from middleware correctly
* redirects and rewrites navigation using link should rewrite from next.config.js correctly
* redirects and rewrites navigation using link should redirect from next.config.js correctly
* redirects and rewrites navigation using link should redirect using catchall from next.config.js correctly
* redirects and rewrites navigation using button should rewrite from middleware correctly
* redirects and rewrites navigation using button should redirect from middleware correctly
* redirects and rewrites navigation using button should rewrite from next.config.js correctly
* redirects and rewrites navigation using button should redirect from next.config.js correctly
* redirects and rewrites navigation using button should redirect using catchall from next.config.js correctly

test/e2e/app-dir/root-layout-redirect/root-layout-redirect.test.ts
* root-layout-redirect should work using browser

test/e2e/app-dir/root-layout-render-once/index.test.ts
* app-dir root layout render once should only render root layout once

test/e2e/app-dir/not-found-default/index.test.ts
* app dir - not found with default 404 page should error on client notFound from root layout in browser
* app dir - not found with default 404 page should error on server notFound from root layout on server-side

test/e2e/app-dir/route-page-manifest-bug/route-page-manifest-bug.test.ts
* route-page-manifest-bug should work when requesting route handler after page

test/e2e/app-dir/not-found/basic/index.test.ts
* app dir - not-found - basic with default runtime should use the not-found page for non-matching routes
* app dir - not-found - basic with default runtime should match dynamic route not-found boundary correctly
* app dir - not-found - basic with default runtime should escalate notFound to parent layout if no not-found boundary present in current layer
* app dir - not-found - basic with default runtime should not reload the page

test/e2e/app-dir/router-stuck-dynamic-static-segment/router-stuck-dynamic-static-segment.test.ts
* router-stuck-dynamic-static-segment should allow navigation between dynamic parameter and static parameter of the same value

test/e2e/app-dir/router-autoscroll/router-autoscroll.test.ts
* router autoscrolling on navigation vertical scroll should scroll to top of document when navigating between to pages without layout
* router autoscrolling on navigation vertical scroll should scroll to top of page when scrolling to phe top of the document wouldn't have the page in the viewport
* router autoscrolling on navigation vertical scroll should scroll down to the navigated page when it's below viewort
* router autoscrolling on navigation vertical scroll should not scroll when the top of the page is in the viewport
* router autoscrolling on navigation vertical scroll should not scroll to top of document if page in viewport
* router autoscrolling on navigation vertical scroll should scroll to top of document if possible while giving focus to page
* router autoscrolling on navigation horizontal scroll should't scroll horizontally
* router autoscrolling on navigation router.refresh() should not scroll when called alone
* router autoscrolling on navigation router.refresh() should not stop router.push() from scrolling
* router autoscrolling on navigation bugs Should scroll to the top of the layout when the first child is display none
* router autoscrolling on navigation bugs Should scroll to the top of the layout when the first child is position fixed
* router autoscrolling on navigation bugs Should scroll to the top of the layout when the first child is position sticky
* router autoscrolling on navigation bugs Should apply scroll when loading.js is used

test/e2e/app-dir/search-params-react-key/layout-params.test.ts
* app dir - search params keys should keep the React router instance the same when changing the search params

test/e2e/app-dir/app/index.test.ts
* app dir should have correct searchParams and params (server)
* app dir should have correct searchParams and params (client)
* app dir should match redirects in pages correctly $path
* app dir should match redirects in pages correctly $path
* app dir should match redirects in pages correctly $path
* app dir should match redirects in pages correctly $path
* app dir should match redirects in pages correctly $path
* app dir should not apply client router filter on shallow
* app dir should not have duplicate config warnings
* app dir should use text/x-component for flight
* app dir should return the \`vary\` header from pages for flight requests
* app dir should serve from pages
* app dir should serve dynamic route from pages
* app dir should serve from public
* app dir should ensure the </body></html> suffix is at the end of the stream
* app dir should serve /index as separate page
* app dir should include layouts when no direct parent layout
* app dir should use new root layout when provided
* app dir should not create new root layout when nested (optional)
* app dir should include parent document when no direct parent layout
* app dir should not include parent when not in parent directory
* app dir should serve page as a segment name correctly
* app dir should not serve when layout is provided but no folder index
* app dir should handle hash in initial url
* app dir <Link /> should allow linking from app page to pages page
* app dir <Link /> should navigate to pages dynamic route from pages page if it overlaps with an app page
* app dir <Link /> should push to external url
* app dir <Link /> should replace to external url
* app dir server components should not serve .server.js as a path
* app dir server components should not serve .client.js as a path
* app dir server components should serve shared component
* app dir server components dynamic routes should only pass params that apply to the layout
* app dir server components catch-all routes should handle optional segments
* app dir server components catch-all routes should handle optional segments root
* app dir server components catch-all routes should handle optional catch-all segments link
* app dir server components catch-all routes should handle required segments
* app dir server components catch-all routes should handle required segments root as not found
* app dir server components catch-all routes should handle catch-all segments link
* app dir server components should serve client component should serve server-side
* app dir server components should serve client component should serve client-side
* app dir server components should include client component layout with server component route should include it server-side
* app dir server components should include client component layout with server component route should include it client-side
* app dir server components Loading should render loading.js in initial html for slow layout
* app dir server components Loading should render loading.js in browser for slow layout
* app dir server components Loading should render loading.js in initial html for slow layout and page
* app dir server components Loading should render loading.js in browser for slow layout and page
* app dir server components middleware should strip internal query parameters from requests to middleware for rewrite
* app dir server components middleware should strip internal query parameters from requests to middleware for redirect
* app dir server components next/router should support router.back and router.forward
* app dir server components client components should have consistent query and params handling
* app dir searchParams prop client component should have the correct search params
* app dir searchParams prop client component should have the correct search params on rewrite
* app dir searchParams prop client component should have the correct search params on middleware rewrite
* app dir searchParams prop server component should have the correct search params
* app dir searchParams prop server component should have the correct search params on rewrite
* app dir searchParams prop server component should have the correct search params on middleware rewrite
* app dir template component should render the template that holds state in a client component and reset on navigation
* app dir error component should trigger error component when an error happens during rendering
* app dir error component should trigger error component when an error happens during server components rendering
* app dir error component should use default error boundary for prod and overlay for dev when no error component specified
* app dir error component should display error digest for error in server component with default error boundary
* app dir known bugs should support React cache server component
* app dir known bugs should support React cache server component client-navigation
* app dir known bugs should support React cache client component
* app dir known bugs should support React cache client component client-navigation
* app dir known bugs should support React cache middleware overriding headers
* app dir known bugs should support React fetch instrumentation server component
* app dir known bugs should support React fetch instrumentation server component client-navigation
* app dir known bugs should not share flight data between requests
* app dir known bugs should handle router.refresh without resetting state
* app dir known bugs should handle as on next/link
* app dir known bugs should handle next/link back to initially loaded page
* app dir known bugs should not do additional pushState when already on the page
* app dir next/script should support next/script and render in correct order
* app dir next/script should insert preload tags for beforeInteractive and afterInteractive scripts
* app dir next/script should load stylesheets for next/scripts
* app dir data fetch with response over 16KB with chunked encoding should load page when fetching a large amount of data
* app dir bootstrap scripts should only bootstrap with one script, prinitializing the rest

test/e2e/app-dir/root-layout/root-layout.test.ts
* app-dir root layout Should do a mpa navigation when switching root layout should work with basic routes
* app-dir root layout Should do a mpa navigation when switching root layout should work with dynamic catchall routes
* app-dir root layout Should do a mpa navigation when switching root layout should work with static routes
* app-dir root layout should correctly handle navigation between multiple root layouts

test/e2e/app-dir/rsc-basic/rsc-basic.test.ts
* app dir - rsc basics should correctly render page returning null
* app dir - rsc basics should correctly render component returning null
* app dir - rsc basics should correctly render layout returning null
* app dir - rsc basics should correctly render page returning undefined
* app dir - rsc basics should correctly render component returning undefined
* app dir - rsc basics should correctly render layout returning undefined
* app dir - rsc basics should render server components correctly
* app dir - rsc basics should reuse the inline flight response without sending extra requests
* app dir - rsc basics should support multi-level server component imports
* app dir - rsc basics should be able to navigate between rsc routes
* app dir - rsc basics should handle streaming server components correctly
* app dir - rsc basics should track client components in dynamic imports
* app dir - rsc basics should link correctly with next/link without mpa navigation to the page
* app dir - rsc basics should escape streaming data correctly
* app dir - rsc basics should render built-in 404 page for missing route if pagesDir is not presented
* app dir - rsc basics should suspense next/legacy/image in server components
* app dir - rsc basics should suspense next/image in server components
* app dir - rsc basics should handle various kinds of exports correctly
* app dir - rsc basics should support native modules in server component
* app dir - rsc basics should resolve different kinds of components correctly
* app dir - rsc basics should render initial styles of css-in-js in nodejs SSR correctly
* app dir - rsc basics should render initial styles of css-in-js in edge SSR correctly
* app dir - rsc basics should render css-in-js suspense boundary correctly
* app dir - rsc basics should stick to the url without trailing /page suffix
* app dir - rsc basics should support streaming for flight response
* app dir - rsc basics should support partial hydration with inlined server data
* app dir - rsc basics should not apply rsc syntax checks in pages/api
* app dir - rsc basics should not use bundled react for pages with app
* app dir - rsc basics should use canary react for app

test/e2e/app-dir/parallel-routes-and-interception/parallel-routes-and-interception.test.ts
* parallel-routes-and-interception parallel routes should match parallel routes
* parallel-routes-and-interception parallel routes should render nested parallel routes
* parallel-routes-and-interception parallel routes should apply the catch-all route to the parallel route if no matching route is found
* parallel-routes-and-interception route intercepting with dynamic routes should render intercepted route
* parallel-routes-and-interception route intercepting with dynamic optional catch-all routes should render intercepted route
* parallel-routes-and-interception route intercepting with dynamic catch-all routes should render intercepted route
* parallel-routes-and-interception route intercepting should render intercepted route
* parallel-routes-and-interception route intercepting should render intercepted route from a nested route
* parallel-routes-and-interception route intercepting should re-render the layout on the server when it had a default child route

test/integration/custom-routes-i18n-index-redirect/test/index.test.js
* Custom routes i18n with index redirect dev mode should respond to default locale redirects correctly for index redirect

test/integration/custom-server-types/test/index.test.js
* Custom Server TypeScript should build server.ts correctly

test/integration/disable-js/test/index.test.js
* disabled runtime JS dev mode should render the page
* disabled runtime JS dev mode should not have __NEXT_DATA__ script
* disabled runtime JS dev mode should have a script for each preload link

test/integration/dist-dir/test/index.test.js
* distDir dev mode should render the page
* distDir dev mode should build the app within the given \`dist\` directory
* distDir dev mode should not build the app within the default \`.next\` directory

test/integration/development-runtime-config/test/index.test.js
* should work with runtime-config in next.config.js empty runtime-config
* should work with runtime-config in next.config.js with runtime-config

test/integration/custom-routes-i18n/test/index.test.js
* Custom routes i18n dev mode should respond to default locale redirects correctly
* Custom routes i18n dev mode should rewrite index routes correctly
* Custom routes i18n dev mode should rewrite correctly

test/integration/data-fetching-errors/test/index.test.js
* GS(S)P Page Errors dev mode should show error for getStaticProps as component member
* GS(S)P Page Errors dev mode should show error for getServerSideProps as component member
* GS(S)P Page Errors dev mode should show error for getStaticPaths as component member
* GS(S)P Page Errors dev mode should show error for undefined getStaticProps
* GS(S)P Page Errors dev mode should show error for undefined getServerSideProps

test/integration/document-head-warnings/test/index.test.js
* Custom Document Head Warnings development mode warns when using a <title> in document/head
* Custom Document Head Warnings development mode warns when using viewport meta tags in document/head
* Custom Document Head Warnings development mode warns when using a crossOrigin attribute on document/head

test/integration/duplicate-pages/test/index.test.js
* Handles Duplicate Pages dev mode Shows warning in development

test/integration/dynamic-optional-routing-root-fallback/test/index.test.js
* Dynamic Optional Routing Root Fallback dev mode should render optional catch-all top-level route with no segments
* Dynamic Optional Routing Root Fallback dev mode should render optional catch-all top-level route with one segment
* Dynamic Optional Routing Root Fallback dev mode should render optional catch-all top-level route with two segments

test/integration/dynamic-optional-routing-root-static-paths/test/index.test.js
* Dynamic Optional Routing dev mode should render optional catch-all top-level route with no segments
* Dynamic Optional Routing dev mode should render optional catch-all top-level route with one segment
* Dynamic Optional Routing dev mode should render optional catch-all top-level route with two segments

test/integration/development-hmr-refresh/test/index.test.js
* page should not reload when the file is not changed

test/integration/draft-mode/test/index.test.ts
* Test Draft Mode Development Mode should start development application
* Test Draft Mode Development Mode should enable draft mode
* Test Draft Mode Development Mode should return cookies to be expired after dev server reboot
* Test Draft Mode Development Mode should start the client-side browser
* Test Draft Mode Development Mode should fetch draft data on SSR
* Test Draft Mode Development Mode should fetch draft data on CST
* Test Draft Mode Development Mode should disable draft mode

test/integration/dynamic-require/test/index.test.js
* Dynamic require should not throw error when dynamic require is used

test/integration/dynamic-route-rename/test/index.test.js
* Dynamic route rename casing should not throw error when changing casing of dynamic route file

test/integration/dynamic-optional-routing/test/index.test.js
* Dynamic Optional Routing dev mode should render catch-all top-level route with multiple segments
* Dynamic Optional Routing dev mode should render catch-all top-level route with single segment
* Dynamic Optional Routing dev mode should render catch-all top-level route with no segments
* Dynamic Optional Routing dev mode should render catch-all nested route with multiple segments
* Dynamic Optional Routing dev mode should render catch-all nested route with single segment
* Dynamic Optional Routing dev mode should render catch-all nested route with no segments
* Dynamic Optional Routing dev mode should render catch-all nested route with no segments and leading slash
* Dynamic Optional Routing dev mode should match catch-all api route with multiple segments
* Dynamic Optional Routing dev mode should match catch-all api route with single segment
* Dynamic Optional Routing dev mode should match catch-all api route with no segments
* Dynamic Optional Routing dev mode should match catch-all api route with no segments and leading slash
* Dynamic Optional Routing dev mode should handle getStaticPaths no segments
* Dynamic Optional Routing dev mode should handle getStaticPaths no segments and trailing slash
* Dynamic Optional Routing dev mode should handle getStaticPaths 1 segment
* Dynamic Optional Routing dev mode should handle getStaticPaths 1 segment and trailing slash
* Dynamic Optional Routing dev mode should handle getStaticPaths 2 segments
* Dynamic Optional Routing dev mode should handle getStaticPaths 2 segments and trailing slash
* Dynamic Optional Routing dev mode should fall back to top-level catch-all
* Dynamic Optional Routing dev mode should match root path on undefined param
* Dynamic Optional Routing dev mode should match root path on false param
* Dynamic Optional Routing dev mode should match root path on null param
* Dynamic Optional Routing dev mode should handle getStaticPaths with fallback no segments
* Dynamic Optional Routing dev mode should handle getStaticPaths with fallback 2 segments
* Dynamic Optional Routing dev mode should fallback correctly when fallback enabled
* Dynamic Optional Routing dev mode should fail to build when optional route has index.js at root
* Dynamic Optional Routing dev mode should fail to build when optional route has same page at root
* Dynamic Optional Routing dev mode should fail to build when mixed with regular catch-all
* Dynamic Optional Routing dev mode should fail to build when optional but no catch-all

test/integration/edge-runtime-streaming-error/test/index.test.ts
* dev mode logs the error correctly

test/integration/edge-runtime-response-error/test/index.test.js
* Edge runtime code with imports test error if response is not Response type Edge API dev test Response
* Edge runtime code with imports test error if response is not Response type Middleware dev test Response

test/integration/empty-object-getInitialProps/test/index.test.js
* Empty Project It should show empty object warning on SSR
* Empty Project It should not show empty object warning for page without \`getInitialProps\`
* Empty Project should show empty object warning during client transition

test/integration/empty-project/test/index.test.js
* Empty Project Should not time out and return 404

test/integration/edge-runtime-configurable-guards/test/index.test.js
* Edge runtime configurable guards Edge API with use of Function as a type does not warn in dev at runtime
* Edge runtime configurable guards Middleware with use of Function as a type does not warn in dev at runtime

test/integration/edge-runtime-with-node.js-apis/test/index.test.ts
* Middleware using Node.js API dev mode does not throw on using process.arch
* Middleware using Node.js API dev mode does not throw on using process.version
* Edge route using Node.js API dev mode does not throw on using process.arch
* Edge route using Node.js API dev mode does not throw on using process.version

test/integration/dynamic-routing/test/index.test.js
* Dynamic Routing dev mode should support long URLs for dynamic routes
* Dynamic Routing dev mode should handle only query on dynamic route
* Dynamic Routing dev mode should handle only hash on dynamic route
* Dynamic Routing dev mode should navigate with hash to dynamic route with link
* Dynamic Routing dev mode should navigate with hash to dynamic route with router
* Dynamic Routing dev mode should not have any query values when not defined
* Dynamic Routing dev mode should render normal route
* Dynamic Routing dev mode should render another normal route
* Dynamic Routing dev mode should render dynamic page
* Dynamic Routing dev mode should prioritize a non-dynamic page
* Dynamic Routing dev mode should render nested dynamic page
* Dynamic Routing dev mode should render optional dynamic page
* Dynamic Routing dev mode should render nested optional dynamic page
* Dynamic Routing dev mode should not error when requesting dynamic page with /api
* Dynamic Routing dev mode should render dynamic route with query
* Dynamic Routing dev mode should not have any console warnings on initial load
* Dynamic Routing dev mode should not have any console warnings when navigating to dynamic route
* Dynamic Routing dev mode should navigate to a dynamic page successfully
* Dynamic Routing dev mode should navigate to a dynamic page with href with differing query and as correctly
* Dynamic Routing dev mode should navigate to a dynamic page successfully no as
* Dynamic Routing dev mode should navigate to a dynamic page successfully interpolated
* Dynamic Routing dev mode should navigate to a dynamic page successfully interpolated with additional query values
* Dynamic Routing dev mode should allow calling Router.push on mount successfully
* Dynamic Routing dev mode should navigate optional dynamic page
* Dynamic Routing dev mode should navigate optional dynamic page with value
* Dynamic Routing dev mode should navigate to a nested dynamic page successfully
* Dynamic Routing dev mode should navigate to a nested dynamic page successfully no as
* Dynamic Routing dev mode should navigate to a nested dynamic page successfully interpolated
* Dynamic Routing dev mode should pass params in getInitialProps during SSR
* Dynamic Routing dev mode should pass params in getInitialProps during client navigation
* Dynamic Routing dev mode [catch all] should not match root on SSR
* Dynamic Routing dev mode [catch all] should pass param in getInitialProps during SSR
* Dynamic Routing dev mode [catch all] should pass params in getInitialProps during SSR
* Dynamic Routing dev mode [catch all] should strip trailing slash
* Dynamic Routing dev mode [catch all] should not decode slashes (start)
* Dynamic Routing dev mode [catch all] should not decode slashes (end)
* Dynamic Routing dev mode [catch all] should not decode slashes (middle)
* Dynamic Routing dev mode [catch-all] should pass params in getInitialProps during client navigation (single)
* Dynamic Routing dev mode [catch-all] should pass params in getInitialProps during client navigation (multi)
* Dynamic Routing dev mode [catch-all] should pass params in getInitialProps during client navigation (encoded)
* Dynamic Routing dev mode [catch-all] shouldn't fail on colon followed by double digits in the path
* Dynamic Routing dev mode [ssg: catch all] should pass param in getStaticProps during SSR
* Dynamic Routing dev mode [ssg: catch all] should pass params in getStaticProps during SSR
* Dynamic Routing dev mode [nested ssg: catch all] should pass param in getStaticProps during SSR
* Dynamic Routing dev mode [nested ssg: catch all] should pass params in getStaticProps during SSR
* Dynamic Routing dev mode [predefined ssg: catch all] should pass param in getStaticProps during SSR
* Dynamic Routing dev mode [predefined ssg: catch all] should pass params in getStaticProps during SSR
* Dynamic Routing dev mode [predefined ssg: prerendered catch all] should pass param in getStaticProps during SSR
* Dynamic Routing dev mode [predefined ssg: prerendered catch all] should pass params in getStaticProps during SSR
* Dynamic Routing dev mode [ssg: catch-all] should pass params in getStaticProps during client navigation (single)
* Dynamic Routing dev mode [ssg: catch-all] should pass params in getStaticProps during client navigation (single interpolated)
* Dynamic Routing dev mode [ssg: catch-all] should pass params in getStaticProps during client navigation (multi)
* Dynamic Routing dev mode [ssg: catch-all] should pass params in getStaticProps during client navigation (multi) no as
* Dynamic Routing dev mode [ssg: catch-all] should pass params in getStaticProps during client navigation (multi interpolated)
* Dynamic Routing dev mode [nested ssg: catch-all] should pass params in getStaticProps during client navigation (single)
* Dynamic Routing dev mode [nested ssg: catch-all] should pass params in getStaticProps during client navigation (multi)
* Dynamic Routing dev mode should update dynamic values on mount
* Dynamic Routing dev mode should not have placeholder query values for SSS
* Dynamic Routing dev mode should update with a hash in the URL
* Dynamic Routing dev mode should scroll to a hash on mount
* Dynamic Routing dev mode should scroll to a hash on client-side navigation
* Dynamic Routing dev mode should prioritize public files over dynamic route
* Dynamic Routing dev mode should serve file with space from public folder
* Dynamic Routing dev mode should serve file with plus from public folder
* Dynamic Routing dev mode should serve file from public folder encoded
* Dynamic Routing dev mode should serve file with %20 from public folder
* Dynamic Routing dev mode should serve file with space from static folder
* Dynamic Routing dev mode should serve file with plus from static folder
* Dynamic Routing dev mode should serve file from static folder encoded
* Dynamic Routing dev mode should serve file with %20 from static folder
* Dynamic Routing dev mode should respond with bad request with invalid encoding
* Dynamic Routing dev mode should not preload buildManifest for non-auto export dynamic pages
* Dynamic Routing dev mode should show error when interpolating fails for href
* Dynamic Routing dev mode should work with HMR correctly

test/integration/custom-routes/test/index.test.js
* Custom routes dev mode should honor caseSensitiveRoutes config for /to-ANOTHER
* Custom routes dev mode should honor caseSensitiveRoutes config for /HELLO-world
* Custom routes dev mode should honor caseSensitiveRoutes config for /docs/GITHUB
* Custom routes dev mode should honor caseSensitiveRoutes config for /add-HEADER
* Custom routes dev mode should successfully rewrite a WebSocket request
* Custom routes dev mode should successfully rewrite a WebSocket request to a page
* Custom routes dev mode should not rewrite for _next/data route when a match is found
* Custom routes dev mode should handle has query encoding correctly
* Custom routes dev mode should support long URLs for rewrites
* Custom routes dev mode should continue in beforeFiles rewrites
* Custom routes dev mode should not hang when proxy rewrite fails
* Custom routes dev mode should handle one-to-one rewrite successfully
* Custom routes dev mode should handle chained rewrites successfully
* Custom routes dev mode should handle param like headers properly
* Custom routes dev mode should not match dynamic route immediately after applying header
* Custom routes dev mode should handle chained redirects successfully
* Custom routes dev mode should not match redirect for /_next
* Custom routes dev mode should redirect successfully with permanent: false
* Custom routes dev mode should redirect with params successfully
* Custom routes dev mode should redirect with hash successfully
* Custom routes dev mode should redirect successfully with provided statusCode
* Custom routes dev mode should redirect successfully with catchall
* Custom routes dev mode should server static files through a rewrite
* Custom routes dev mode should rewrite with params successfully
* Custom routes dev mode should not append params when one is used in destination path
* Custom routes dev mode should double redirect successfully
* Custom routes dev mode should allow params in query for rewrite
* Custom routes dev mode should have correct params for catchall rewrite
* Custom routes dev mode should have correct encoding for params with catchall rewrite
* Custom routes dev mode should have correct query for catchall rewrite
* Custom routes dev mode should have correct header for catchall rewrite
* Custom routes dev mode should allow params in query for redirect
* Custom routes dev mode should have correctly encoded params in query for redirect
* Custom routes dev mode should overwrite param values correctly
* Custom routes dev mode should handle query for rewrite correctly
* Custom routes dev mode should not allow rewrite to override page file
* Custom routes dev mode show allow redirect to override the page
* Custom routes dev mode should work successfully on the client
* Custom routes dev mode should work with rewrite when manually specifying href/as
* Custom routes dev mode should match a page after a rewrite
* Custom routes dev mode should match dynamic route after rewrite
* Custom routes dev mode should match public file after rewrite
* Custom routes dev mode should match /_next file after rewrite
* Custom routes dev mode should allow redirecting to external resource
* Custom routes dev mode should apply headers for exact match
* Custom routes dev mode should apply headers for multi match
* Custom routes dev mode should apply params for header key/values
* Custom routes dev mode should support URL for header key/values
* Custom routes dev mode should apply params header key/values with URL
* Custom routes dev mode should apply params header key/values with URL that has port
* Custom routes dev mode should support named pattern for header key/values
* Custom routes dev mode should support proxying to external resource
* Custom routes dev mode should support unnamed parameters correctly
* Custom routes dev mode should support named like unnamed parameters correctly
* Custom routes dev mode should add refresh header for 308 redirect
* Custom routes dev mode should have correctly encoded query in location and refresh headers
* Custom routes dev mode should handle basic api rewrite successfully
* Custom routes dev mode should handle api rewrite with un-named param successfully
* Custom routes dev mode should handle api rewrite with param successfully
* Custom routes dev mode should handle encoded value in the pathname correctly
* Custom routes dev mode should handle unnamed parameters with multi-match successfully
* Custom routes dev mode should handle named regex parameters with multi-match successfully
* Custom routes dev mode should redirect with URL in query correctly
* Custom routes dev mode should redirect with URL in query correctly non-encoded
* Custom routes dev mode should match missing header headers correctly
* Custom routes dev mode should match missing query headers correctly
* Custom routes dev mode should match missing cookie headers correctly
* Custom routes dev mode should match missing header redirect correctly
* Custom routes dev mode should match missing query redirect correctly
* Custom routes dev mode should match missing cookie redirect correctly
* Custom routes dev mode should match missing header rewrite correctly
* Custom routes dev mode should match missing query rewrite correctly
* Custom routes dev mode should match missing cookie rewrite correctly
* Custom routes dev mode should match has header rewrite correctly
* Custom routes dev mode should match has query rewrite correctly
* Custom routes dev mode should match has cookie rewrite correctly
* Custom routes dev mode should match has host rewrite correctly
* Custom routes dev mode should pass has segment for rewrite correctly
* Custom routes dev mode should not pass non captured has value for rewrite correctly
* Custom routes dev mode should pass captured has value for rewrite correctly
* Custom routes dev mode should match has header redirect correctly
* Custom routes dev mode should match has query redirect correctly
* Custom routes dev mode should match has cookie redirect correctly
* Custom routes dev mode should match has host redirect correctly
* Custom routes dev mode should match has host redirect and insert in destination correctly
* Custom routes dev mode should match has query redirect with duplicate query key
* Custom routes dev mode should match has header for header correctly
* Custom routes dev mode should match has query for header correctly
* Custom routes dev mode should match has cookie for header correctly
* Custom routes dev mode should match has host for header correctly
* Custom routes no-op rewrite should not error for no-op rewrite and auto export dynamic route
* Custom routes should load custom routes when only one type is used dev mode should work with just headers
* Custom routes should load custom routes when only one type is used dev mode should work with just rewrites
* Custom routes should load custom routes when only one type is used dev mode should work with just redirects

test/integration/dynamic-routing/test/middleware.test.js
* Dynamic Routing dev mode should support long URLs for dynamic routes
* Dynamic Routing dev mode should handle only query on dynamic route
* Dynamic Routing dev mode should handle only hash on dynamic route
* Dynamic Routing dev mode should navigate with hash to dynamic route with link
* Dynamic Routing dev mode should navigate with hash to dynamic route with router
* Dynamic Routing dev mode should not have any query values when not defined
* Dynamic Routing dev mode should render normal route
* Dynamic Routing dev mode should render another normal route
* Dynamic Routing dev mode should render dynamic page
* Dynamic Routing dev mode should prioritize a non-dynamic page
* Dynamic Routing dev mode should render nested dynamic page
* Dynamic Routing dev mode should render optional dynamic page
* Dynamic Routing dev mode should render nested optional dynamic page
* Dynamic Routing dev mode should not error when requesting dynamic page with /api
* Dynamic Routing dev mode should render dynamic route with query
* Dynamic Routing dev mode should not have any console warnings on initial load
* Dynamic Routing dev mode should not have any console warnings when navigating to dynamic route
* Dynamic Routing dev mode should navigate to a dynamic page successfully
* Dynamic Routing dev mode should navigate to a dynamic page with href with differing query and as correctly
* Dynamic Routing dev mode should navigate to a dynamic page successfully no as
* Dynamic Routing dev mode should navigate to a dynamic page successfully interpolated
* Dynamic Routing dev mode should navigate to a dynamic page successfully interpolated with additional query values
* Dynamic Routing dev mode should allow calling Router.push on mount successfully
* Dynamic Routing dev mode should navigate optional dynamic page
* Dynamic Routing dev mode should navigate optional dynamic page with value
* Dynamic Routing dev mode should navigate to a nested dynamic page successfully
* Dynamic Routing dev mode should navigate to a nested dynamic page successfully no as
* Dynamic Routing dev mode should navigate to a nested dynamic page successfully interpolated
* Dynamic Routing dev mode should pass params in getInitialProps during SSR
* Dynamic Routing dev mode should pass params in getInitialProps during client navigation
* Dynamic Routing dev mode [catch all] should not match root on SSR
* Dynamic Routing dev mode [catch all] should pass param in getInitialProps during SSR
* Dynamic Routing dev mode [catch all] should pass params in getInitialProps during SSR
* Dynamic Routing dev mode [catch all] should strip trailing slash
* Dynamic Routing dev mode [catch all] should not decode slashes (start)
* Dynamic Routing dev mode [catch all] should not decode slashes (end)
* Dynamic Routing dev mode [catch all] should not decode slashes (middle)
* Dynamic Routing dev mode [catch-all] should pass params in getInitialProps during client navigation (single)
* Dynamic Routing dev mode [catch-all] should pass params in getInitialProps during client navigation (multi)
* Dynamic Routing dev mode [catch-all] should pass params in getInitialProps during client navigation (encoded)
* Dynamic Routing dev mode [catch-all] shouldn't fail on colon followed by double digits in the path
* Dynamic Routing dev mode [ssg: catch all] should pass param in getStaticProps during SSR
* Dynamic Routing dev mode [ssg: catch all] should pass params in getStaticProps during SSR
* Dynamic Routing dev mode [nested ssg: catch all] should pass param in getStaticProps during SSR
* Dynamic Routing dev mode [nested ssg: catch all] should pass params in getStaticProps during SSR
* Dynamic Routing dev mode [predefined ssg: catch all] should pass param in getStaticProps during SSR
* Dynamic Routing dev mode [predefined ssg: catch all] should pass params in getStaticProps during SSR
* Dynamic Routing dev mode [predefined ssg: prerendered catch all] should pass param in getStaticProps during SSR
* Dynamic Routing dev mode [predefined ssg: prerendered catch all] should pass params in getStaticProps during SSR
* Dynamic Routing dev mode [ssg: catch-all] should pass params in getStaticProps during client navigation (single)
* Dynamic Routing dev mode [ssg: catch-all] should pass params in getStaticProps during client navigation (single interpolated)
* Dynamic Routing dev mode [ssg: catch-all] should pass params in getStaticProps during client navigation (multi)
* Dynamic Routing dev mode [ssg: catch-all] should pass params in getStaticProps during client navigation (multi) no as
* Dynamic Routing dev mode [ssg: catch-all] should pass params in getStaticProps during client navigation (multi interpolated)
* Dynamic Routing dev mode [nested ssg: catch-all] should pass params in getStaticProps during client navigation (single)
* Dynamic Routing dev mode [nested ssg: catch-all] should pass params in getStaticProps during client navigation (multi)
* Dynamic Routing dev mode should update dynamic values on mount
* Dynamic Routing dev mode should not have placeholder query values for SSS
* Dynamic Routing dev mode should update with a hash in the URL
* Dynamic Routing dev mode should scroll to a hash on mount
* Dynamic Routing dev mode should scroll to a hash on client-side navigation
* Dynamic Routing dev mode should prioritize public files over dynamic route
* Dynamic Routing dev mode should serve file with space from public folder
* Dynamic Routing dev mode should serve file with plus from public folder
* Dynamic Routing dev mode should serve file from public folder encoded
* Dynamic Routing dev mode should serve file with %20 from public folder
* Dynamic Routing dev mode should serve file with space from static folder
* Dynamic Routing dev mode should serve file with plus from static folder
* Dynamic Routing dev mode should serve file from static folder encoded
* Dynamic Routing dev mode should serve file with %20 from static folder
* Dynamic Routing dev mode should respond with bad request with invalid encoding
* Dynamic Routing dev mode should not preload buildManifest for non-auto export dynamic pages
* Dynamic Routing dev mode should resolve dynamic route href for page added later
* Dynamic Routing dev mode should work with HMR correctly

test/integration/edge-runtime-module-errors/test/index.test.js
* Edge runtime code with imports Edge API importing vanilla 3rd party module does not throw in dev at runtime
* Edge runtime code with imports Middleware importing vanilla 3rd party module does not throw in dev at runtime
* Edge runtime code with imports Edge API using Buffer polyfill does not throw in dev at runtime
* Edge runtime code with imports Middleware using Buffer polyfill does not throw in dev at runtime

test/integration/edge-runtime-module-errors/test/module-imports.test.js
* Edge runtime code with imports Edge API importing unused node.js module does not throw in dev at runtime
* Edge runtime code with imports Middleware importing unused node.js module does not throw in dev at runtime

test/e2e/app-dir/set-cookies/set-cookies.test.ts
* set-cookies for edge runtime for /app should set two set-cookie headers
* set-cookies for experimental-edge runtime for /app should set two set-cookie headers
* set-cookies for node runtime for /pages should set two set-cookie headers
* set-cookies for node runtime for /app should set two set-cookie headers

test/e2e/app-dir/similar-pages-paths/similar-pages-paths.test.ts
* app-dir similar pages paths should not have conflicts for similar pattern page paths between app and pages

test/e2e/app-dir/third-parties/basic.test.ts
* @next/third-parties basic usage renders YoutubeEmbed
* @next/third-parties basic usage renders GoogleMapsEmbed

test/e2e/app-dir/searchparams-static-bailout/searchparams-static-bailout.test.ts
* searchparams-static-bailout server component should bailout when using searchParams
* searchparams-static-bailout server component should not bailout when not using searchParams
* searchparams-static-bailout client component should bailout when using searchParams
* searchparams-static-bailout client component should bailout when using searchParams is passed to client component
* searchparams-static-bailout client component should not bailout when not using searchParams

test/e2e/app-dir/test-template/{{ toFileName name }}/{{ toFileName name }}.test.ts
* {{name}} should work using cheerio
* {{name}} should work using browser
* {{name}} should work with html
* {{name}} should work with fetch

test/e2e/app-dir/underscore-ignore-app-paths/underscore-ignore-app-paths.test.ts
* underscore-ignore-app-paths should not serve app path with underscore
* underscore-ignore-app-paths should serve pages path with underscore

test/e2e/app-dir/trailingslash/trailingslash.test.ts
* app-dir trailingSlash handling should redirect route when requesting it directly
* app-dir trailingSlash handling should render link with trailing slash
* app-dir trailingSlash handling should redirect route when requesting it directly by browser
* app-dir trailingSlash handling should redirect route when clicking link

test/e2e/app-dir/use-params/use-params.test.ts
* use-params should work for single dynamic param
* use-params should work for nested dynamic params
* use-params should work for catch all params
* use-params should work for single dynamic param client navigating
* use-params should work for nested dynamic params client navigating

test/e2e/app-dir/with-exported-function-config/with-exported-function-config.test.ts
* with-exported-function-config should have correct values in function config manifest

test/e2e/app-dir/use-selected-layout-segment-s/use-selected-layout-segment-s.test.ts
* useSelectedLayoutSegment(s) should return correct values for root layout
* useSelectedLayoutSegment(s) should return correct values in layout before static segment
* useSelectedLayoutSegment(s) should return correct values in layout before param segment
* useSelectedLayoutSegment(s) should return correct values in layout before catchall segment
* useSelectedLayoutSegment(s) should return correct values in layout after last segment
* useSelectedLayoutSegment(s) should correctly update when changing static segment
* useSelectedLayoutSegment(s) should correctly update when changing param segment
* useSelectedLayoutSegment(s) should correctly update when changing catchall segment

test/e2e/basepath-trailing-slash.test.ts
* basePath + trailingSlash should allow URL query strings without refresh
* basePath + trailingSlash should allow URL query strings on index without refresh
* basePath + trailingSlash should correctly replace state when same asPath but different url

test/e2e/browserslist-extends/index.test.ts
* browserslist-extends should work

test/e2e/cancel-request/stream-cancel.test.ts
* streaming responses cancel inner stream after disconnect middleware cancels stream making progress
* streaming responses cancel inner stream after disconnect middleware cancels stalled stream
* streaming responses cancel inner stream after disconnect middleware cancels stream that never sent data
* streaming responses cancel inner stream after disconnect edge app route handler cancels stream making progress
* streaming responses cancel inner stream after disconnect edge app route handler cancels stalled stream
* streaming responses cancel inner stream after disconnect edge app route handler cancels stream that never sent data
* streaming responses cancel inner stream after disconnect node app route handler cancels stream making progress
* streaming responses cancel inner stream after disconnect node app route handler cancels stalled stream
* streaming responses cancel inner stream after disconnect node app route handler cancels stream that never sent data
* streaming responses cancel inner stream after disconnect edge pages api cancels stream making progress
* streaming responses cancel inner stream after disconnect edge pages api cancels stalled stream
* streaming responses cancel inner stream after disconnect edge pages api cancels stream that never sent data
* streaming responses cancel inner stream after disconnect node pages api cancels stream making progress
* streaming responses cancel inner stream after disconnect node pages api cancels stalled stream
* streaming responses cancel inner stream after disconnect node pages api cancels stream that never sent data

test/e2e/children-page/index.test.ts
* children-page with app dir should show the content if you have a page named children
* children-page with pages dir should show the content if you have a page named children

test/e2e/config-promise-export/async-function.test.ts
* async export should work

test/e2e/config-promise-export/promise.test.ts
* promise export should work

test/e2e/disable-js-preload/test/index.test.js
* disabled JS preloads should render the page
* disabled JS preloads should not have JS preload links

test/e2e/dynamic-route-interpolation/index.test.ts
* Dynamic Route Interpolation should work
* Dynamic Route Interpolation should work with parameter itself
* Dynamic Route Interpolation should work with brackets
* Dynamic Route Interpolation should work with parameter itself in API routes
* Dynamic Route Interpolation should work with brackets in API routes
* Dynamic Route Interpolation should bust data cache
* Dynamic Route Interpolation should bust data cache with symbol

test/e2e/edge-api-endpoints-can-receive-body/index.test.ts
* Edge API endpoints can receive body reads the body as text
* Edge API endpoints can receive body reads the body from index

test/e2e/edge-async-local-storage/index.test.ts
* edge api can use async local storage cans use a single instance per request
* edge api can use async local storage cans use multiple instances per request

test/e2e/edge-can-read-request-body/index.test.ts
* Edge can read request body renders the static page
* Edge can read request body middleware reads a JSON body
* Edge can read request body middleware reads a text body
* Edge can read request body middleware reads an URL encoded form data
* Edge can read request body middleware reads a multipart form data

test/e2e/edge-compiler-can-import-blob-assets/index.test.ts
* Edge Compiler can import asset assets allows to fetch a remote URL
* Edge Compiler can import asset assets allows to fetch a remote URL with a path and basename

test/e2e/edge-compiler-module-exports-preference/index.test.ts
* Edge compiler module exports preference favors the browser export

test/e2e/basepath.test.ts
* basePath should navigate to /404 correctly client-side
* basePath should navigate to /_error correctly client-side
* basePath should navigate to external site and back
* basePath should handle query/hash correctly during query updating #hello? $search
* basePath should handle query/hash correctly during query updating #? $search
* basePath should handle query/hash correctly during query updating ## $search
* basePath should handle query/hash correctly during query updating ##? $search
* basePath should handle query/hash correctly during query updating ##hello? $search
* basePath should handle query/hash correctly during query updating ##hello $search
* basePath should handle query/hash correctly during query updating #hello?world $search
* basePath should handle query/hash correctly during query updating #a ?hello=world
* basePath should handle query/hash correctly during query updating #a ?hello
* basePath should handle query/hash correctly during query updating #a ?hello=
* basePath should navigate back correctly to a dynamic route
* basePath should respect basePath in amphtml link rel
* basePath should 404 for public file without basePath
* basePath should serve public file with basePath correctly
* basePath should rewrite with basePath by default
* basePath should not rewrite without basePath without disabling
* basePath should not rewrite with basePath when set to false
* basePath should rewrite without basePath when set to false
* basePath should redirect with basePath by default
* basePath should not redirect without basePath without disabling
* basePath should not redirect with basePath when set to false
* basePath should redirect without basePath when set to false
* basePath should add header with basePath by default
* basePath should not add header without basePath without disabling
* basePath should not add header with basePath when set to false
* basePath should add header without basePath when set to false
* basePath should not update URL for a 404
* basePath should handle 404 urls that start with basePath
* basePath should update dynamic params after mount correctly
* basePath should navigate to index page with getStaticProps
* basePath should work with nested folder with same name as basePath
* basePath should work with normal dynamic page
* basePath should work with hash links
* basePath should work with catch-all page
* basePath should redirect trailing slash correctly
* basePath should redirect trailing slash on root correctly
* basePath should navigate an absolute url
* basePath should navigate an absolute local url with basePath
* basePath should navigate an absolute local url without basePath
* basePath should 404 when manually adding basePath with <Link>
* basePath should 404 when manually adding basePath with router.push
* basePath should 404 when manually adding basePath with router.replace
* basePath should show the hello page under the /docs prefix
* basePath should have correct router paths on first load of /
* basePath should have correct router paths on first load of /hello
* basePath should fetch data for getStaticProps without reloading
* basePath should fetch data for getServerSideProps without reloading
* basePath should show 404 for page not under the /docs prefix
* basePath should show the other-page page under the /docs prefix
* basePath should have basePath field on Router
* basePath should navigate to the page without refresh
* basePath should use urls with basepath in router events
* basePath should use urls with basepath in router events for hash changes
* basePath should use urls with basepath in router events for cancelled routes
* basePath should use urls with basepath in router events for failed route change
* basePath should allow URL query strings without refresh
* basePath should allow URL query strings on index without refresh
* basePath should correctly replace state when same asPath but different url

test/e2e/edge-pages-support/index.test.ts
* edge-render-getserversideprops should have correct query for pages/api
* edge-render-getserversideprops should have correct query for pages/api dynamic

test/e2e/favicon-short-circuit/favicon-short-circuit.test.ts
* favicon-short-circuit should short circuit the favicon in development

test/e2e/edge-configurable-runtime/index.test.ts
* Configurable runtime for src/pages and API routes In dev mode runs with no warning API route on the edge runtime
* Configurable runtime for pages and API routes In dev mode runs with no warning API route on the edge runtime

test/e2e/conflicting-app-page-error/index.test.ts
* Conflict between app file and pages file should not show error overlay for non conflict pages under app or pages dir

test/e2e/hello-world/hello-world.test.ts
* hello-world should work using cheerio
* hello-world should work using browser
* hello-world should work with html
* hello-world should work with fetch

test/e2e/handle-non-hoisted-swc-helpers/index.test.ts
* handle-non-hoisted-swc-helpers should work

test/e2e/i18n-api-support/index.test.ts
* i18n API support should respond to normal API request
* i18n API support should respond to normal dynamic API request
* i18n API support should fallback rewrite non-matching API request

test/e2e/i18n-data-route/i18n-data-route.test.ts
* i18n-data-route with locale prefix /en-CA should render /about via /en-CA/about
* i18n-data-route with locale prefix /en-CA should render /[slug]/about via /en-CA/blog/about
* i18n-data-route with locale prefix /en-CA should serve data for /about
* i18n-data-route with locale prefix /en-CA should serve data for /[slug]/about
* i18n-data-route with locale prefix /fr-CA should render /about via /fr-CA/about
* i18n-data-route with locale prefix /fr-CA should render /[slug]/about via /fr-CA/blog/about
* i18n-data-route with locale prefix /fr-CA should serve data for /about
* i18n-data-route with locale prefix /fr-CA should serve data for /[slug]/about
* i18n-data-route without locale prefix should render /about via /about
* i18n-data-route without locale prefix should render /[slug]/about via /blog/about
* i18n-data-route without locale prefix should serve data for /about
* i18n-data-route without locale prefix should serve data for /[slug]/about

test/e2e/getserversideprops/test/index.test.ts
* getServerSideProps should navigate between pages successfully
* getServerSideProps should work with early request ending
* getServerSideProps should allow POST request for getServerSideProps page
* getServerSideProps should render correctly when notFound is false (non-dynamic)
* getServerSideProps should render 404 correctly when notFound is returned (non-dynamic)
* getServerSideProps should render 404 correctly when notFound is returned client-transition (non-dynamic)
* getServerSideProps should render correctly when notFound is false (dynamic)
* getServerSideProps should render 404 correctly when notFound is returned (dynamic)
* getServerSideProps should render 404 correctly when notFound is returned client-transition (dynamic)
* getServerSideProps should SSR normal page correctly
* getServerSideProps should SSR getServerSideProps page correctly
* getServerSideProps should handle throw ENOENT correctly
* getServerSideProps should have gssp in __NEXT_DATA__
* getServerSideProps should not have gssp in __NEXT_DATA__ for non-GSSP page
* getServerSideProps should supply query values SSR
* getServerSideProps should supply params values for catchall correctly
* getServerSideProps should have original req.url for /_next/data request dynamic page
* getServerSideProps should have original req.url for /_next/data request dynamic page with query
* getServerSideProps should have original req.url for /_next/data request
* getServerSideProps should have original req.url for /_next/data request with query
* getServerSideProps should have correct req.url and query for direct visit dynamic page
* getServerSideProps should have correct req.url and query for direct visit dynamic page rewrite direct
* getServerSideProps should have correct req.url and query for direct visit dynamic page rewrite direct with internal query
* getServerSideProps should have correct req.url and query for direct visit dynamic page rewrite param
* getServerSideProps should have correct req.url and query for direct visit dynamic page with query
* getServerSideProps should have correct req.url and query for direct visit
* getServerSideProps should return data correctly
* getServerSideProps should pass query for data request
* getServerSideProps should return data correctly for dynamic page
* getServerSideProps should return data correctly when props is a promise
* getServerSideProps should navigate to a normal page and back
* getServerSideProps should load a fast refresh page
* getServerSideProps should provide correct query value for dynamic page
* getServerSideProps should parse query values on mount correctly
* getServerSideProps should pass query for data request on navigation
* getServerSideProps should reload page on failed data request
* getServerSideProps should always call getServerSideProps without caching
* getServerSideProps should not re-call getServerSideProps when updating query
* getServerSideProps should dedupe server data requests
* getServerSideProps should not show warning from url prop being returned
* getServerSideProps should show error for extra keys returned from getServerSideProps
* getServerSideProps should show error for invalid JSON returned from getServerSideProps
* getServerSideProps should show error for invalid JSON returned from getStaticProps on CST
* getServerSideProps should show error for accessing res after gssp returns
* getServerSideProps should show error for accessing res through props promise after gssp returns
* getServerSideProps should only warn for accessing res if not streaming

test/e2e/i18n-default-locale-redirect/i18n-default-locale-redirect.test.ts
* i18-default-locale-redirect should not request a path prefixed with default locale
* i18-default-locale-redirect should request a path prefixed with non-default locale

test/e2e/i18n-disallow-multiple-locales/i18n-disallow-multiple-locales.test.ts
* i18n-disallow-multiple-locales should verify the default locale works
* i18n-disallow-multiple-locales /en-US should 200
* i18n-disallow-multiple-locales /en should 200
* i18n-disallow-multiple-locales /nl-NL should 200
* i18n-disallow-multiple-locales /nl-BE should 200
* i18n-disallow-multiple-locales /nl should 200
* i18n-disallow-multiple-locales /fr-BE should 200
* i18n-disallow-multiple-locales /fr should 200
* i18n-disallow-multiple-locales /en-US/en-US should 404
* i18n-disallow-multiple-locales /en-US/en should 404
* i18n-disallow-multiple-locales /en-US/nl-NL should 404
* i18n-disallow-multiple-locales /en-US/nl-BE should 404
* i18n-disallow-multiple-locales /en-US/nl should 404
* i18n-disallow-multiple-locales /en-US/fr-BE should 404
* i18n-disallow-multiple-locales /en-US/fr should 404
* i18n-disallow-multiple-locales /en/en-US should 404
* i18n-disallow-multiple-locales /en/en should 404
* i18n-disallow-multiple-locales /en/nl-NL should 404
* i18n-disallow-multiple-locales /en/nl-BE should 404
* i18n-disallow-multiple-locales /en/nl should 404
* i18n-disallow-multiple-locales /en/fr-BE should 404
* i18n-disallow-multiple-locales /en/fr should 404
* i18n-disallow-multiple-locales /nl-NL/en-US should 404
* i18n-disallow-multiple-locales /nl-NL/en should 404
* i18n-disallow-multiple-locales /nl-NL/nl-NL should 404
* i18n-disallow-multiple-locales /nl-NL/nl-BE should 404
* i18n-disallow-multiple-locales /nl-NL/nl should 404
* i18n-disallow-multiple-locales /nl-NL/fr-BE should 404
* i18n-disallow-multiple-locales /nl-NL/fr should 404
* i18n-disallow-multiple-locales /nl-BE/en-US should 404
* i18n-disallow-multiple-locales /nl-BE/en should 404
* i18n-disallow-multiple-locales /nl-BE/nl-NL should 404
* i18n-disallow-multiple-locales /nl-BE/nl-BE should 404
* i18n-disallow-multiple-locales /nl-BE/nl should 404
* i18n-disallow-multiple-locales /nl-BE/fr-BE should 404
* i18n-disallow-multiple-locales /nl-BE/fr should 404
* i18n-disallow-multiple-locales /nl/en-US should 404
* i18n-disallow-multiple-locales /nl/en should 404
* i18n-disallow-multiple-locales /nl/nl-NL should 404
* i18n-disallow-multiple-locales /nl/nl-BE should 404
* i18n-disallow-multiple-locales /nl/nl should 404
* i18n-disallow-multiple-locales /nl/fr-BE should 404
* i18n-disallow-multiple-locales /nl/fr should 404
* i18n-disallow-multiple-locales /fr-BE/en-US should 404
* i18n-disallow-multiple-locales /fr-BE/en should 404
* i18n-disallow-multiple-locales /fr-BE/nl-NL should 404
* i18n-disallow-multiple-locales /fr-BE/nl-BE should 404
* i18n-disallow-multiple-locales /fr-BE/nl should 404
* i18n-disallow-multiple-locales /fr-BE/fr-BE should 404
* i18n-disallow-multiple-locales /fr-BE/fr should 404
* i18n-disallow-multiple-locales /fr/en-US should 404
* i18n-disallow-multiple-locales /fr/en should 404
* i18n-disallow-multiple-locales /fr/nl-NL should 404
* i18n-disallow-multiple-locales /fr/nl-BE should 404
* i18n-disallow-multiple-locales /fr/nl should 404
* i18n-disallow-multiple-locales /fr/fr-BE should 404
* i18n-disallow-multiple-locales /fr/fr should 404

test/e2e/i18n-ignore-rewrite-source-locale/rewrites-with-basepath.test.ts
* i18n-ignore-rewrite-source-locale with basepath get public file by skipping locale in rewrite, locale: 
* i18n-ignore-rewrite-source-locale with basepath get public file by skipping locale in rewrite, locale: /en
* i18n-ignore-rewrite-source-locale with basepath get public file by skipping locale in rewrite, locale: /sv
* i18n-ignore-rewrite-source-locale with basepath get public file by skipping locale in rewrite, locale: /nl
* i18n-ignore-rewrite-source-locale with basepath call api by skipping locale in rewrite, locale: 
* i18n-ignore-rewrite-source-locale with basepath call api by skipping locale in rewrite, locale: /en
* i18n-ignore-rewrite-source-locale with basepath call api by skipping locale in rewrite, locale: /sv
* i18n-ignore-rewrite-source-locale with basepath call api by skipping locale in rewrite, locale: /nl

test/e2e/i18n-ignore-redirect-source-locale/redirects-with-basepath.test.ts
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from:  to: sv
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from: /en to: sv
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from: /sv to: sv
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from: /nl to: sv
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from:  to: en
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from: /en to: en
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from: /sv to: en
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from: /nl to: en
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from:  to: /
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from: /en to: /
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from: /sv to: /
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from: /nl to: /
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from and to: 
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from and to: /en
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from and to: /sv
* i18n-ignore-redirect-source-locale with basepath get redirected to the new page, from and to: /nl

test/e2e/i18n-ignore-redirect-source-locale/redirects.test.ts
* i18n-ignore-redirect-source-locale get redirected to the new page, from:  to: sv
* i18n-ignore-redirect-source-locale get redirected to the new page, from: /en to: sv
* i18n-ignore-redirect-source-locale get redirected to the new page, from: /sv to: sv
* i18n-ignore-redirect-source-locale get redirected to the new page, from: /nl to: sv
* i18n-ignore-redirect-source-locale get redirected to the new page, from:  to: en
* i18n-ignore-redirect-source-locale get redirected to the new page, from: /en to: en
* i18n-ignore-redirect-source-locale get redirected to the new page, from: /sv to: en
* i18n-ignore-redirect-source-locale get redirected to the new page, from: /nl to: en
* i18n-ignore-redirect-source-locale get redirected to the new page, from:  to: /
* i18n-ignore-redirect-source-locale get redirected to the new page, from: /en to: /
* i18n-ignore-redirect-source-locale get redirected to the new page, from: /sv to: /
* i18n-ignore-redirect-source-locale get redirected to the new page, from: /nl to: /
* i18n-ignore-redirect-source-locale get redirected to the new page, from and to: 
* i18n-ignore-redirect-source-locale get redirected to the new page, from and to: /en
* i18n-ignore-redirect-source-locale get redirected to the new page, from and to: /sv
* i18n-ignore-redirect-source-locale get redirected to the new page, from and to: /nl

test/e2e/i18n-data-fetching-redirect/index.test.ts
* i18n-data-fetching-redirect Redirect to another locale gssp-redirect en -> sv
* i18n-data-fetching-redirect Redirect to another locale gssp-redirect sv -> en
* i18n-data-fetching-redirect Redirect to another locale gsp-blocking-redirect en -> sv
* i18n-data-fetching-redirect Redirect to another locale gsp-blocking-redirect sv -> en
* i18n-data-fetching-redirect Redirect to another locale gsp-fallback-redirect en -> sv
* i18n-data-fetching-redirect Redirect to another locale gsp-fallback-redirect sv -> en
* i18n-data-fetching-redirect Redirect to another locale next/link gssp-redirect en -> sv
* i18n-data-fetching-redirect Redirect to another locale next/link gssp-redirect sv -> en
* i18n-data-fetching-redirect Redirect to another locale next/link gsp-blocking-redirect en -> sv
* i18n-data-fetching-redirect Redirect to another locale next/link gsp-blocking-redirect sv -> en
* i18n-data-fetching-redirect Redirect to another locale next/link gsp-fallback-redirect en -> sv
* i18n-data-fetching-redirect Redirect to another locale next/link gsp-fallback-redirect sv -> en
* i18n-data-fetching-redirect Redirect to locale from context gssp-redirect en
* i18n-data-fetching-redirect Redirect to locale from context gssp-redirect sv
* i18n-data-fetching-redirect Redirect to locale from context gsp-blocking-redirect en
* i18n-data-fetching-redirect Redirect to locale from context gsp-blocking-redirect sv
* i18n-data-fetching-redirect Redirect to locale from context gsp-fallback-redirect en
* i18n-data-fetching-redirect Redirect to locale from context gsp-fallback-redirect sv
* i18n-data-fetching-redirect Redirect to locale from context next/link gssp-redirect en
* i18n-data-fetching-redirect Redirect to locale from context next/link gssp-redirect sv
* i18n-data-fetching-redirect Redirect to locale from context next/link gsp-blocking-redirect en
* i18n-data-fetching-redirect Redirect to locale from context next/link gsp-blocking-redirect sv
* i18n-data-fetching-redirect Redirect to locale from context next/link gsp-fallback-redirect en
* i18n-data-fetching-redirect Redirect to locale from context next/link gsp-fallback-redirect sv

test/e2e/i18n-ignore-rewrite-source-locale/rewrites.test.ts
* i18n-ignore-rewrite-source-locale get public file by skipping locale in rewrite, locale: 
* i18n-ignore-rewrite-source-locale get public file by skipping locale in rewrite, locale: /en
* i18n-ignore-rewrite-source-locale get public file by skipping locale in rewrite, locale: /sv
* i18n-ignore-rewrite-source-locale get public file by skipping locale in rewrite, locale: /nl
* i18n-ignore-rewrite-source-locale call api by skipping locale in rewrite, locale: 
* i18n-ignore-rewrite-source-locale call api by skipping locale in rewrite, locale: /en
* i18n-ignore-rewrite-source-locale call api by skipping locale in rewrite, locale: /sv
* i18n-ignore-rewrite-source-locale call api by skipping locale in rewrite, locale: /nl

test/e2e/link-with-api-rewrite/index.test.ts
* link-with-api-rewrite should perform hard navigation for rewritten urls
* link-with-api-rewrite should perform hard navigation for direct urls

test/e2e/ignore-invalid-popstateevent/without-i18n.test.ts
* Event with stale state - static route previously was dynamic Ignore event without query param
* Event with stale state - static route previously was dynamic Ignore event with query param

test/e2e/ignore-invalid-popstateevent/with-i18n.test.ts
* i18n: Event with stale state - static route previously was dynamic Ignore event without query param
* i18n: Event with stale state - static route previously was dynamic Ignore event with query param
* i18n: Event with stale state - static route previously was dynamic Don't ignore event with different locale

test/e2e/middleware-base-path/test/index.test.ts
* Middleware base tests should execute from absolute paths
* Middleware base tests router.query must exist when Link clicked page routing

test/e2e/middleware-custom-matchers-basepath/test/index.test.ts
* Middleware custom matchers basePath should match
* Middleware custom matchers basePath should not match
* Middleware custom matchers basePath should not match
* Middleware custom matchers basePath should match has query on client routing

test/e2e/middleware-custom-matchers-i18n/test/index.test.ts
* Middleware custom matchers i18n should match
* Middleware custom matchers i18n should match
* Middleware custom matchers i18n should match
* Middleware custom matchers i18n should match
* Middleware custom matchers i18n should not match
* Middleware custom matchers i18n should not match
* Middleware custom matchers i18n should not match
* Middleware custom matchers i18n should not match
* Middleware custom matchers i18n should match has query on client routing
* Middleware custom matchers i18n should match has query on client routing
* Middleware custom matchers i18n should match has query on client routing
* Middleware custom matchers i18n should match has query on client routing
* Middleware custom matchers with root should not match

test/e2e/middleware-dynamic-basepath-matcher/test/index.test.ts
* Middleware custom matchers basePath should match
* Middleware custom matchers basePath should not match
* Middleware custom matchers basePath should not match
* Middleware custom matchers basePath should match query path

test/e2e/middleware-custom-matchers/test/index.test.ts
* Middleware custom matchers should match missing header correctly
* Middleware custom matchers should match missing query correctly
* Middleware custom matchers should match source path
* Middleware custom matchers should match has header
* Middleware custom matchers should match has query
* Middleware custom matchers should match has cookie
* Middleware custom matchers should match has host
* Middleware custom matchers should match has header value
* Middleware custom matchers should match has query on client routing
* Middleware custom matchers should match has cookie on client routing

test/e2e/middleware-fetches-with-any-http-method/index.test.ts
* Middleware fetches with any HTTP method passes the method on a direct fetch request
* Middleware fetches with any HTTP method passes the method when providing a Request object

test/e2e/middleware-fetches-with-body/index.test.ts
* Middleware fetches with body with default bodyParser sizeLimit (1mb) should return 413 for body greater than 1mb
* Middleware fetches with body with default bodyParser sizeLimit (1mb) should be able to send and return body size equal to 1mb
* Middleware fetches with body with default bodyParser sizeLimit (1mb) should be able to send and return body greater than default highWaterMark (16KiB)
* Middleware fetches with body with custom bodyParser sizeLimit (5kb) should return 413 for body greater than 5kb
* Middleware fetches with body with custom bodyParser sizeLimit (5kb) should be able to send and return body size equal to 5kb
* Middleware fetches with body with custom bodyParser sizeLimit (5mb) should return 413 for body greater than 5mb
* Middleware fetches with body with custom bodyParser sizeLimit (5mb) should be able to send and return body size equal to 5mb
* Middleware fetches with body with bodyParser = false should be able to send and return with body size equal to 16KiB
* Middleware fetches with body with bodyParser = false should be able to send and return with body greater than 16KiB
* Middleware fetches with body should return 413 for body equal to 10mb

test/e2e/manual-client-base-path/index.test.ts
* manual-client-base-path should not warn for flag in output
* manual-client-base-path should not update with basePath on mount /
* manual-client-base-path should not update with basePath on mount /another
* manual-client-base-path should not update with basePath on mount /dynamic/first
* manual-client-base-path should not update with basePath on mount /dynamic/second
* manual-client-base-path should navigate correctly from index
* manual-client-base-path should navigate correctly from another

test/e2e/middleware-request-header-overrides/test/index.test.ts
* Middleware Request Headers Overrides Serverless Functions Backend Adds new headers
* Middleware Request Headers Overrides Serverless Functions Backend Deletes headers
* Middleware Request Headers Overrides Serverless Functions Backend Updates headers
* Middleware Request Headers Overrides Edge Functions Backend Adds new headers
* Middleware Request Headers Overrides Edge Functions Backend Deletes headers
* Middleware Request Headers Overrides Edge Functions Backend Updates headers
* Middleware Request Headers Overrides getServerSideProps Backend Adds new headers
* Middleware Request Headers Overrides getServerSideProps Backend Deletes headers
* Middleware Request Headers Overrides getServerSideProps Backend Updates headers

test/e2e/middleware-redirects/test/index.test.ts
* Middleware Redirect should redirect correctly with redirect in next.config.js
* Middleware Redirect does not include the locale in redirects by default
* Middleware Redirect should redirect to data urls with data requests and internal redirects
* Middleware Redirect should redirect to external urls with data requests and external redirects
* Middleware Redirect should redirect
* Middleware Redirect should implement internal redirects
* Middleware Redirect should redirect cleanly with the original url param
* Middleware Redirect should redirect multiple times
* Middleware Redirect should redirect (infinite-loop)
* Middleware Redirect should redirect to api route with locale
* Middleware Redirect should redirect with a fragment
* Middleware Redirect /fr should redirect
* Middleware Redirect /fr should implement internal redirects
* Middleware Redirect /fr should redirect cleanly with the original url param
* Middleware Redirect /fr should redirect multiple times
* Middleware Redirect /fr should redirect (infinite-loop)
* Middleware Redirect /fr should redirect to api route with locale
* Middleware Redirect /fr should redirect with a fragment

test/e2e/middleware-responses/test/index.test.ts
* Middleware Responses responds with multiple cookies
* Middleware Responses should not fail when returning a stream
* Middleware Responses should not fail when returning a text body
* Middleware Responses should respond with a 401 status code
* Middleware Responses should respond with one header
* Middleware Responses should respond with two headers
* Middleware Responses should respond appending headers headers
* Middleware Responses /fr responds with multiple cookies
* Middleware Responses /fr should not fail when returning a stream
* Middleware Responses /fr should not fail when returning a text body
* Middleware Responses /fr should respond with a 401 status code
* Middleware Responses /fr should respond with one header
* Middleware Responses /fr should respond with two headers
* Middleware Responses /fr should respond appending headers headers

test/e2e/middleware-shallow-link/index.test.ts
* browser-shallow-navigation should render the correct page

test/e2e/middleware-matcher/index.test.ts
* Middleware can set the matcher in its config does add the header for root request
* Middleware can set the matcher in its config adds the header for a matched path
* Middleware can set the matcher in its config adds the header for a matched data path (with header)
* Middleware can set the matcher in its config adds the header for a matched data path (without header)
* Middleware can set the matcher in its config adds the header for another matched path
* Middleware can set the matcher in its config adds the header for another matched data path
* Middleware can set the matcher in its config does add the header for root data request
* Middleware can set the matcher in its config should load matches in client matchers correctly
* Middleware can set the matcher in its config should navigate correctly with matchers
* using a single matcher does not add the header for root request
* using a single matcher does not add the header for root data request
* using a single matcher adds the header for a matched path
* using a single matcher adds the headers for a matched data path (with header)
* using a single matcher adds the header for a matched data path (without header)
* using a single matcher does not add the header for an unmatched path
* using root matcher adds the header to the /
* using root matcher adds the header to the /index
* using root matcher adds the header for a matched data path (with header)
* using root matcher adds the header for a matched data path (without header)
* using a single matcher with i18n adds the header for a matched path
* using a single matcher with i18n adds the header for a mathed root path with /index
* using a single matcher with i18n adds the headers for a matched data path
* using a single matcher with i18n does not add the header for an unmatched path
* using a single matcher with i18n and trailingSlash adds the header for a matched path
* using a single matcher with i18n and trailingSlash adds the header for a mathed root path with /index
* using a single matcher with i18n and trailingSlash adds the headers for a matched data path
* using a single matcher with i18n and trailingSlash does not add the header for an unmatched path
* using a single matcher with i18n and basePath adds the header for a matched path
* using a single matcher with i18n and basePath adds the header for a mathed root path with /index
* using a single matcher with i18n and basePath adds the headers for a matched data path
* using a single matcher with i18n and basePath does not add the header for an unmatched path
* using a single matcher with i18n and basePath and trailingSlash adds the header for a matched path
* using a single matcher with i18n and basePath and trailingSlash adds the header for a mathed root path with /index
* using a single matcher with i18n and basePath and trailingSlash adds the headers for a matched data path
* using a single matcher with i18n and basePath and trailingSlash does not add the header for an unmatched path

test/e2e/multi-zone/multi-zone.test.ts
* multi-zone should correctly respond for /first
* multi-zone should correctly respond for /second
* multi-zone should correctly respond for /first/blog/post-1
* multi-zone should correctly respond for /second/blog/post-1
* multi-zone should correctly respond for /second/another/post-1

test/e2e/new-link-behavior/child-a-tag-error.test.ts
* New Link Behavior with <a> child should throw error with <a> child

test/e2e/new-link-behavior/index.test.ts
* New Link Behavior should render link with <a>
* New Link Behavior should navigate to /about
* New Link Behavior should handle onclick
* New Link Behavior should handle preventdefault
* New Link Behavior should render link with id
* New Link Behavior should render link with classname
* New Link Behavior should render link with multiple children

test/e2e/new-link-behavior/material-ui.test.ts
* New Link Behavior with material-ui should render MuiLink with <a>

test/e2e/new-link-behavior/stitches.test.ts
* New Link Behavior with stitches should render <a>

test/e2e/new-link-behavior/typescript.test.ts
* New Link Behavior should render link with <a>
* New Link Behavior should apply ref on link

test/e2e/next-font/index.test.ts
* next/font app import values page with font
* next/font app import values page with local fonts
* next/font app import values Variable font without weight range
* next/font app computed styles page with fonts
* next/font app computed styles page using variables
* next/font app computed styles page using fallback fonts
* next/font app Fallback fontfaces local Indie flower
* next/font app Fallback fontfaces local Fraunces
* next/font app Fallback fontfaces local Roboto multiple weights and styles
* next/font app Fallback fontfaces local Roboto multiple weights and styles - variable 1
* next/font app Fallback fontfaces local Roboto multiple weights and styles - variable 2
* next/font app Fallback fontfaces google Fraunces
* next/font app-old import values page with font
* next/font app-old import values page with local fonts
* next/font app-old import values Variable font without weight range
* next/font app-old computed styles page with fonts
* next/font app-old computed styles page using variables
* next/font app-old computed styles page using fallback fonts
* next/font app-old Fallback fontfaces local Indie flower
* next/font app-old Fallback fontfaces local Fraunces
* next/font app-old Fallback fontfaces local Roboto multiple weights and styles
* next/font app-old Fallback fontfaces local Roboto multiple weights and styles - variable 1
* next/font app-old Fallback fontfaces local Roboto multiple weights and styles - variable 2
* next/font app-old Fallback fontfaces google Fraunces

test/e2e/next-font/without-preloaded-fonts.test.ts
* next/font/google without-preloaded-fonts without _app without fonts

test/e2e/next-head/index.test.ts
* next/head should place charset element at the top of <head>
* next/head should have correct head tags in initial document
* next/head should have correct head tags from a fragment
* next/head should have correct head tags after hydration
* next/head should have current head tags from a _document getInitialProps

test/e2e/next-image-forward-ref/index.test.ts
* next-image-forward-ref allows framer-motion to animate opacity

test/e2e/next-script/index.test.ts
* beforeInteractive in document Head Script is injected server-side
* beforeInteractive in document body Script is injected server-side

test/e2e/middleware-rewrites/test/index.test.ts
* Middleware Rewrite should handle next.config.js rewrite with body correctly
* Middleware Rewrite should handle middleware rewrite with body correctly
* Middleware Rewrite should handle static dynamic rewrite from middleware correctly
* Middleware Rewrite should not have un-necessary data request on rewrite
* Middleware Rewrite should not mix component cache when navigating between dynamic routes
* Middleware Rewrite should hard navigate on 404 for data request
* Middleware Rewrite should rewrite correctly when navigating via history
* Middleware Rewrite should rewrite correctly when navigating via history after query update
* Middleware Rewrite should return HTML/data correctly for pre-rendered page
* Middleware Rewrite should override with rewrite internally correctly
* Middleware Rewrite should rewrite to data urls for incoming data request internally rewritten
* Middleware Rewrite should override with rewrite externally correctly
* Middleware Rewrite should rewrite to the external url for incoming data request externally rewritten
* Middleware Rewrite should rewrite to fallback: true page successfully
* Middleware Rewrite should allow to opt-out prefetch caching
* Middleware Rewrite should allow to rewrite keeping the locale in pathname
* Middleware Rewrite should allow to rewrite to a different locale
* Middleware Rewrite should behave consistently on recursive rewrites
* Middleware Rewrite should allow to switch locales
* Middleware Rewrite should have correct query info for dynamic route after query hydration
* Middleware Rewrite should handle shallow navigation correctly (non-dynamic page)
* Middleware Rewrite should handle shallow navigation correctly (dynamic page)
* Middleware Rewrite should resolve dynamic route after rewrite correctly
* Middleware Rewrite should add a cookie and rewrite to a/b test
* Middleware Rewrite should clear query parameters
* Middleware Rewrite should rewrite to about page
* Middleware Rewrite support colons in path
* Middleware Rewrite can rewrite to path with colon
* Middleware Rewrite can rewrite from path with colon
* Middleware Rewrite can rewrite from path with colon and retain query parameter
* Middleware Rewrite can rewrite to path with colon and retain query parameter
* Middleware Rewrite should rewrite when not using localhost
* Middleware Rewrite should rewrite to Vercel
* Middleware Rewrite should rewrite without hard navigation
* Middleware Rewrite should not call middleware with shallow push
* Middleware Rewrite should correctly rewriting to a different dynamic path
* Middleware Rewrite should not have unexpected errors
* Middleware Rewrite /fr should add a cookie and rewrite to a/b test
* Middleware Rewrite /fr should clear query parameters
* Middleware Rewrite /fr should rewrite to about page
* Middleware Rewrite /fr support colons in path
* Middleware Rewrite /fr can rewrite to path with colon
* Middleware Rewrite /fr can rewrite from path with colon
* Middleware Rewrite /fr can rewrite from path with colon and retain query parameter
* Middleware Rewrite /fr can rewrite to path with colon and retain query parameter
* Middleware Rewrite /fr should rewrite when not using localhost
* Middleware Rewrite /fr should rewrite to Vercel
* Middleware Rewrite /fr should rewrite without hard navigation
* Middleware Rewrite /fr should not call middleware with shallow push
* Middleware Rewrite /fr should correctly rewriting to a different dynamic path
* Middleware Rewrite should not have unexpected errors

test/e2e/no-eslint-warn-with-no-eslint-config/index.test.ts
* no-eslint-warn-with-no-eslint-config should render
* no-eslint-warn-with-no-eslint-config should not have eslint warnings when no eslint config

test/e2e/og-api/index.test.ts
* og-api should respond from index
* og-api should work in app route in node runtime
* og-api should throw error when returning a response object in pages/api in node runtime

test/e2e/middleware-trailing-slash/test/index.test.ts
* Middleware Runtime trailing slash with .html extension should work when requesting the page directly
* Middleware Runtime trailing slash with .html extension should work using browser
* Middleware Runtime trailing slash with .html extension should work when navigating
* Middleware Runtime trailing slash without .html extension should work when requesting the page directly
* Middleware Runtime trailing slash without .html extension should work using browser
* Middleware Runtime trailing slash without .html extension should work when navigating
* Middleware Runtime trailing slash should have init header for NextResponse.redirect
* Middleware Runtime trailing slash should have correct dynamic route params on client-transition to dynamic route
* Middleware Runtime trailing slash should have correct dynamic route params for middleware rewrite to dynamic route
* Middleware Runtime trailing slash should redirect the same for direct visit and client-transition
* Middleware Runtime trailing slash should rewrite the same for direct visit and client-transition
* Middleware Runtime trailing slash should rewrite correctly for non-SSG/SSP page
* Middleware Runtime trailing slash should respond with 400 on decode failure
* Middleware Runtime trailing slash should validate & parse request url from any route
* Middleware Runtime trailing slash should trigger middleware for data requests
* Middleware Runtime trailing slash should normalize data requests into page requests
* Middleware Runtime trailing slash should keep non data requests in their original shape
* Middleware Runtime trailing slash should add a rewrite header on data requests for rewrites

test/e2e/optimized-loading/test/index.test.ts
* Optimized loading page / should render the page /
* Optimized loading page / should not have JS preload links
* Optimized loading page / should load scripts with defer in head
* Optimized loading page /page1 should render the page /page1
* Optimized loading page /page1 should not have JS preload links
* Optimized loading page /page1 should load scripts with defer in head

test/e2e/pages-performance-mark/index.test.ts
* pages performance mark should render the page correctly without crashing with performance mark

test/e2e/postcss-config-cjs/index.test.ts
* postcss-config-cjs works with postcss.config.cjs files

test/e2e/prerender-crawler.test.ts
* Prerender crawler handling should return prerendered page for correctly
* Prerender crawler handling should return fallback for non-crawler correctly
* Prerender crawler handling should block for crawler correctly

test/e2e/prerender-native-module.test.ts
* prerender native module should render index correctly
* prerender native module should render /blog/first correctly
* prerender native module should render /blog/second correctly

test/e2e/proxy-request-with-middleware/test/index.test.ts
* Requests not effected when middleware used should proxy GET request 
* Requests not effected when middleware used should proxy POST request with body

test/e2e/middleware-general/test/index.test.ts
* Middleware Runtime with i18n should work with notFound: true correctly
* Middleware Runtime with i18n should be able to rewrite on _next/static/chunks/pages/ 404
* Middleware Runtime with i18n should have init header for NextResponse.redirect
* Middleware Runtime with i18n should have correct query values for rewrite to ssg page
* Middleware Runtime with i18n should have correct dynamic route params on client-transition to dynamic route
* Middleware Runtime with i18n should have correct dynamic route params for middleware rewrite to dynamic route
* Middleware Runtime with i18n should redirect the same for direct visit and client-transition
* Middleware Runtime with i18n should rewrite the same for direct visit and client-transition
* Middleware Runtime with i18n should rewrite correctly for non-SSG/SSP page
* Middleware Runtime with i18n should respond with 400 on decode failure
* Middleware Runtime with i18n should set fetch user agent correctly
* Middleware Runtime with i18n allows to access env variables
* Middleware Runtime with i18n should contain \`globalThis\`
* Middleware Runtime with i18n should contain crypto APIs
* Middleware Runtime with i18n should accept a URL instance for fetch
* Middleware Runtime with i18n should allow to abort a fetch request
* Middleware Runtime with i18n should validate & parse request url from any route
* Middleware Runtime with i18n should validate & parse request url from a dynamic route with params
* Middleware Runtime with i18n should validate & parse request url from a dynamic route with params and no query
* Middleware Runtime with i18n should validate & parse request url from a dynamic route with params and query
* Middleware Runtime with i18n should throw when using URL with a relative URL
* Middleware Runtime with i18n should throw when using NextRequest with a relative URL
* Middleware Runtime with i18n should throw when using Request with a relative URL
* Middleware Runtime with i18n should warn when using Response.redirect with a relative URL
* Middleware Runtime with i18n should warn when using NextResponse.redirect with a relative URL
* Middleware Runtime with i18n should throw when using NextResponse.rewrite with a relative URL
* Middleware Runtime with i18n should trigger middleware for data requests
* Middleware Runtime with i18n should normalize data requests into page requests
* Middleware Runtime with i18n should keep non data requests in their original shape
* Middleware Runtime with i18n should add a rewrite header on data requests for rewrites
* Middleware Runtime with i18n hard-navigates when the data request failed
* Middleware Runtime without i18n should work with notFound: true correctly
* Middleware Runtime without i18n should be able to rewrite on _next/static/chunks/pages/ 404
* Middleware Runtime without i18n should only contain middleware route in dev middleware manifest
* Middleware Runtime without i18n should have correct query values for rewrite to ssg page
* Middleware Runtime without i18n should have correct dynamic route params on client-transition to dynamic route
* Middleware Runtime without i18n should have correct dynamic route params for middleware rewrite to dynamic route
* Middleware Runtime without i18n should redirect the same for direct visit and client-transition
* Middleware Runtime without i18n should rewrite the same for direct visit and client-transition
* Middleware Runtime without i18n should rewrite correctly for non-SSG/SSP page
* Middleware Runtime without i18n should respond with 400 on decode failure
* Middleware Runtime without i18n should set fetch user agent correctly
* Middleware Runtime without i18n allows to access env variables
* Middleware Runtime without i18n should contain \`globalThis\`
* Middleware Runtime without i18n should contain crypto APIs
* Middleware Runtime without i18n should accept a URL instance for fetch
* Middleware Runtime without i18n should allow to abort a fetch request
* Middleware Runtime without i18n should validate & parse request url from any route
* Middleware Runtime without i18n should validate & parse request url from a dynamic route with params and query
* Middleware Runtime without i18n should throw when using URL with a relative URL
* Middleware Runtime without i18n should throw when using NextRequest with a relative URL
* Middleware Runtime without i18n should throw when using Request with a relative URL
* Middleware Runtime without i18n should warn when using Response.redirect with a relative URL
* Middleware Runtime without i18n should warn when using NextResponse.redirect with a relative URL
* Middleware Runtime without i18n should throw when using NextResponse.rewrite with a relative URL
* Middleware Runtime without i18n should trigger middleware for data requests
* Middleware Runtime without i18n should normalize data requests into page requests
* Middleware Runtime without i18n should keep non data requests in their original shape
* Middleware Runtime without i18n should add a rewrite header on data requests for rewrites
* Middleware Runtime without i18n hard-navigates when the data request failed

test/e2e/repeated-forward-slashes-error/repeated-forward-slashes-error.test.ts
* repeated-forward-slashes-error should log error when href has repeated forward-slashes

test/e2e/reload-scroll-backforward-restoration/index.test.ts
* reload-scroll-back-restoration should restore the scroll position on navigating back
* reload-scroll-back-restoration should restore the scroll position on navigating forward

test/e2e/ssr-react-context/index.test.ts
* React Context should render a page with context
* React Context should render correctly with context consumer
* React Context should render with context after change

test/e2e/config-schema-check/index.test.ts
* next.config.js schema validating - defaultConfig should validate against defaultConfig

test/e2e/skip-trailing-slash-redirect/index.test.ts
* skip-trailing-slash-redirect should parse locale info for data request correctly
* skip-trailing-slash-redirect should be able to redirect locale casing $1
* skip-trailing-slash-redirect should be able to redirect locale casing $1
* skip-trailing-slash-redirect should handle external rewrite correctly /chained-rewrite-ssg
* skip-trailing-slash-redirect should handle external rewrite correctly /chained-rewrite-static
* skip-trailing-slash-redirect should handle external rewrite correctly /chained-rewrite-ssr
* skip-trailing-slash-redirect should handle external rewrite correctly /docs/first
* skip-trailing-slash-redirect should handle external rewrite correctly /docs-auto-static/first
* skip-trailing-slash-redirect should handle external rewrite correctly /docs-ssr/first
* skip-trailing-slash-redirect should allow rewriting invalid buildId correctly
* skip-trailing-slash-redirect should provide original _next/data URL with skipMiddlewareUrlNormalize
* skip-trailing-slash-redirect should allow response body from middleware with flag
* skip-trailing-slash-redirect should merge cookies from middleware and API routes correctly
* skip-trailing-slash-redirect should merge cookies from middleware and edge API routes correctly
* skip-trailing-slash-redirect should correct skip URL normalizing in middleware
* skip-trailing-slash-redirect should apply config redirect correctly
* skip-trailing-slash-redirect should apply config rewrites correctly
* skip-trailing-slash-redirect should not apply trailing slash on load on client
* skip-trailing-slash-redirect pages dir should not apply trailing slash redirect (with slash)
* skip-trailing-slash-redirect pages dir should not apply trailing slash redirect (without slash)
* skip-trailing-slash-redirect pages dir should respond to index correctly
* skip-trailing-slash-redirect pages dir should respond to dynamic route correctly
* skip-trailing-slash-redirect pages dir should navigate client side correctly
* skip-trailing-slash-redirect app dir should not apply trailing slash redirect (with slash)
* skip-trailing-slash-redirect app dir should not apply trailing slash redirect (without slash)
* skip-trailing-slash-redirect app dir should preserve original trailing slashes to links on client
* skip-trailing-slash-redirect app dir should respond to index correctly
* skip-trailing-slash-redirect app dir should respond to dynamic route correctly
* skip-trailing-slash-redirect app dir should navigate client side correctly

test/e2e/streaming-ssr/index.test.ts
* streaming SSR with custom next configs should match more specific route along with dynamic routes
* streaming SSR with custom next configs should work with custom document

test/e2e/styled-jsx/index.test.ts
* styled-jsx should contain styled-jsx styles during SSR
* styled-jsx should render styles during CSR
* styled-jsx should render styles during CSR (AMP)
* styled-jsx should render styles during SSR (AMP)

test/e2e/test-template/{{ toFileName name }}/{{ toFileName name }}.test.ts
* {{name}} should work using cheerio
* {{name}} should work using browser
* {{name}} should work with html
* {{name}} should work with fetch

test/e2e/test-utils-tests/basic/basic.test.ts
* createNextDescribe should work

test/e2e/third-parties/index.test.ts
* @next/third-parties basic usage renders YoutubeEmbed
* @next/third-parties basic usage renders GoogleMapsEmbed

test/e2e/trailingslash-with-rewrite/index.test.ts
* trailingSlash:true with rewrites and getStaticProps should work

test/e2e/switchable-runtime/index.test.ts
* Switchable runtime Switchable runtime (dev) should not include edge api routes and edge ssr routes into dev middleware manifest
* Switchable runtime Switchable runtime (dev) should not consume server.js file extension
* Switchable runtime Switchable runtime (dev) should be possible to switch between runtimes in API routes

test/e2e/transpile-packages/index.test.ts
* transpile packages css should handle global css imports inside transpiled modules
* transpile packages css should handle global scss imports inside transpiled modules
* transpile packages css should handle css modules imports inside transpiled modules
* transpile packages css should handle scss modules imports inside transpiled modules

test/e2e/typescript-version-no-warning/typescript-version-no-warning.test.ts
* typescript-version-no-warning should skip

test/e2e/typescript-version-warning/typescript-version-warning.test.ts
* typescript-version-warning should skip

test/e2e/undici-fetch/index.test.ts
* undici fetch undici global fetch should return true when undici is used
* undici fetch undici global Headers should return true when undici is used
* undici fetch undici global Request should return true when undici is used
* undici fetch undici global Response should return true when undici is used

test/e2e/prerender.test.ts
* Prerender should navigate between pages successfully
* Prerender should respond with 405 for POST to static page
* Prerender should SSR normal page correctly
* Prerender should SSR incremental page correctly
* Prerender should SSR blocking path correctly (blocking)
* Prerender should SSR blocking path correctly (pre-rendered)
* Prerender should have gsp in __NEXT_DATA__
* Prerender should not have gsp in __NEXT_DATA__ for non-GSP page
* Prerender should not supply query values to params or useRouter non-dynamic page SSR
* Prerender should not supply query values to params in /_next/data request
* Prerender should not supply query values to params or useRouter dynamic page SSR
* Prerender should return data correctly
* Prerender should return data correctly for dynamic page
* Prerender should return data correctly for dynamic page (non-seeded)
* Prerender should navigate to a normal page and back
* Prerender should parse query values on mount correctly
* Prerender should reload page on failed data request
* Prerender should SSR dynamic page with brackets in param as object
* Prerender should navigate to dynamic page with brackets in param as object
* Prerender should SSR dynamic page with brackets in param as string
* Prerender should navigate to dynamic page with brackets in param as string
* Prerender should not return data for fallback: false and missing dynamic page
* Prerender should server prerendered path correctly for SSG pages that starts with api-docs
* Prerender should render correctly for SSG pages that starts with api-docs
* Prerender should return data correctly for SSG pages that starts with api-docs
* Prerender should SSR catch-all page with brackets in param as string
* Prerender should navigate to catch-all page with brackets in param as string
* Prerender should SSR catch-all page with brackets in param as object
* Prerender should navigate to catch-all page with brackets in param as object
* Prerender should support prerendered catchall route
* Prerender should support lazy catchall route
* Prerender should support nested lazy catchall route
* Prerender should support prerendered catchall-explicit route (nested)
* Prerender should support prerendered catchall-explicit route (single)
* Prerender should handle fallback only page correctly HTML
* Prerender should handle fallback only page correctly data
* Prerender should 404 for a missing catchall explicit route
* Prerender should 404 for an invalid data url
* Prerender should allow rewriting to SSG page with fallback: false
* Prerender should allow rewriting to SSG page with fallback: 'blocking'
* Prerender should fetch /_next/data correctly with mismatched href and as
* Prerender should show warning when large amount of page data is returned
* Prerender should show warning every time page with large amount of page data is returned
* Prerender should not show warning from url prop being returned
* Prerender should always show fallback for page not in getStaticPaths
* Prerender should not show fallback for page in getStaticPaths
* Prerender should never show fallback for page not in getStaticPaths when blocking
* Prerender should not show fallback for page in getStaticPaths when blocking
* Prerender should log error in console and browser in dev mode
* Prerender should always call getStaticProps without caching in dev
* Prerender should error on bad object from getStaticProps
* Prerender should error on dynamic page without getStaticPaths
* Prerender should error on dynamic page without getStaticPaths returning fallback property
* Prerender should not re-call getStaticProps when updating query
* Prerender should show fallback before invalid JSON is returned from getStaticProps
* Prerender should not fallback before invalid JSON is returned from getStaticProps when blocking fallback
* Prerender should show error for invalid JSON returned from getStaticProps on SSR
* Prerender should show error for invalid JSON returned from getStaticProps on CST
* Prerender should not contain headers already sent error
* Prerender should respond for catch-all deep folder
* Prerender should not fail to update incremental cache
* Prerender should not have experimental undici warning
* Prerender should not have attempted sending invalid payload

test/e2e/type-module-interop/index.test.ts
* Type module interop should render server-side
* Type module interop should render client-side
* Type module interop should render server-side with modules
* Type module interop should render client-side with modules

test/integration/export-no-build/test/index.test.js
* next export without build should show error when there is no production build

test/integration/fetch-polyfill-ky-universal/test/index.test.js
* Fetch polyfill with ky-universal development mode includes polyfilled fetch when using getStaticProps
* Fetch polyfill with ky-universal development mode includes polyfilled fetch when using getServerSideProps
* Fetch polyfill with ky-universal development mode includes polyfilled fetch when using getInitialProps

test/integration/fallback-route-params/test/index.test.js
* Fallback Dynamic Route Params dev mode should have correct fallback query (skeleton)
* Fallback Dynamic Route Params dev mode should have correct fallback query (hydration)

test/integration/fetch-polyfill/test/index.test.js
* Fetch polyfill development mode includes polyfilled fetch when using getStaticProps
* Fetch polyfill development mode includes polyfilled fetch when using getServerSideProps
* Fetch polyfill development mode includes polyfilled fetch when using getInitialProps
* Fetch polyfill development mode includes polyfilled fetch when using API routes
* Fetch polyfill development mode includes polyfilled fetch when using getStaticPaths

test/integration/fallback-false-rewrite/test/index.test.js
* fallback: false rewrite dev mode should rewrite correctly for path at same level as fallback: false SSR
* fallback: false rewrite dev mode should rewrite correctly for path above fallback: false SSR
* fallback: false rewrite dev mode should rewrite correctly for path at same level as fallback: false client
* fallback: false rewrite dev mode should rewrite correctly for path above fallback: false client
* fallback: false rewrite dev mode should not rewrite for path from fallback: false SSR
* fallback: false rewrite dev mode should not rewrite for path from fallback: false client
* fallback: false rewrite dev mode should behave properly when accessing the dynamic param directly

test/integration/env-config/test/index.test.js
* Env Config dev mode should have process environment override .env
* Env Config dev mode should provide global env to next.config.js
* Env Config dev mode should provide env for SSG
* Env Config dev mode should provide env correctly for SSR
* Env Config dev mode should provide env correctly for API routes
* Env Config dev mode should load env from .env
* Env Config dev mode with hot reload should have process environment override .env
* Env Config dev mode with hot reload should provide global env to next.config.js
* Env Config dev mode with hot reload should provide env for SSG
* Env Config dev mode with hot reload should provide env correctly for SSR
* Env Config dev mode with hot reload should provide env correctly for API routes
* Env Config dev mode with hot reload should load env from .env
* Env Config dev mode with hot reload should have updated runtime values after change
* Env Config dev mode with hot reload should trigger HMR correctly when NEXT_PUBLIC_ env is changed
* Env Config test environment should provide global env to next.config.js
* Env Config test environment should provide env correctly for API routes

test/integration/eslint/test/lint-cache.test.js
* eslint caching is enabled by default
* eslint caching is disabled with the --no-cache flag
* the default eslint cache lives in the user defined build directory
* the --cache-location flag allows the user to define a separate cache location
* the default eslint caching strategy is metadata
* cache with content strategy is different from the one with default strategy

test/integration/file-serving/test/index.test.js
* File Serving dev mode should serve file with space correctly from public/
* File Serving dev mode should serve file with space correctly static/
* File Serving dev mode should serve avif image with correct content-type
* File Serving dev mode should serve correct error code
* File Serving dev mode should prevent traversing with /../test-file.txt
* File Serving dev mode should prevent traversing with /../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%af..%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%af..%c0%af..%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%af..%c0%af..%c0%af..%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%af..%c0%af..%c0%af..%c0%af..%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%af..%c0%af..%c0%af..%c0%af..%c0%af..%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%af..%c0%af..%c0%af..%c0%af..%c0%af..%c0%af..%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%af..%c0%af..%c0%af..%c0%af..%c0%af..%c0%af..%c0%af..%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae/%c0%ae%c0%ae/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/%c0%ae%c0%ae/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%af%c0%ae%c0%ae%c0%aftest-file.txt
* File Serving dev mode should prevent traversing with /..%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /..%25c0%25af..%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /..%25c0%25af..%25c0%25af..%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25af..%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae/test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/%25c0%25ae%25c0%25ae/test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25af%25c0%25ae%25c0%25ae%25c0%25aftest-file.txt
* File Serving dev mode should prevent traversing with /..%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c1%9c..%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c1%9c..%c1%9c..%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c1%9c..%c1%9c..%c1%9c..%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c1%9c..%c1%9c..%c1%9c..%c1%9c..%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c1%9c..%c1%9c..%c1%9c..%c1%9c..%c1%9c..%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c1%9c..%c1%9c..%c1%9c..%c1%9c..%c1%9c..%c1%9c..%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c1%9c..%c1%9c..%c1%9c..%c1%9c..%c1%9c..%c1%9c..%c1%9c..%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae\%c0%ae%c0%ae\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\%c0%ae%c0%ae\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9c%c0%ae%c0%ae%c1%9ctest-file.txt
* File Serving dev mode should prevent traversing with /..%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /..%25c1%259c..%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /..%25c1%259c..%25c1%259c..%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259c..%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae\test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\%25c0%25ae%25c0%25ae\test-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259c%25c0%25ae%25c0%25ae%25c1%259ctest-file.txt
* File Serving dev mode should prevent traversing with /..%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /..%%32%66..%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /..%%32%66..%%32%66..%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /..%%32%66..%%32%66..%%32%66..%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /..%%32%66..%%32%66..%%32%66..%%32%66..%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /..%%32%66..%%32%66..%%32%66..%%32%66..%%32%66..%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /..%%32%66..%%32%66..%%32%66..%%32%66..%%32%66..%%32%66..%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /..%%32%66..%%32%66..%%32%66..%%32%66..%%32%66..%%32%66..%%32%66..%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66%%32%65%%32%65%%32%66test-file.txt
* File Serving dev mode should prevent traversing with /..%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /..%%35%63..%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /..%%35%63..%%35%63..%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /..%%35%63..%%35%63..%%35%63..%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /..%%35%63..%%35%63..%%35%63..%%35%63..%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /..%%35%63..%%35%63..%%35%63..%%35%63..%%35%63..%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /..%%35%63..%%35%63..%%35%63..%%35%63..%%35%63..%%35%63..%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /..%%35%63..%%35%63..%%35%63..%%35%63..%%35%63..%%35%63..%%35%63..%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63%%32%65%%32%65%%35%63test-file.txt
* File Serving dev mode should prevent traversing with /../test-file.txt
* File Serving dev mode should prevent traversing with /../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /../test-file.txt
* File Serving dev mode should prevent traversing with /../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /../../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/%252e%252e/test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252ftest-file.txt
* File Serving dev mode should prevent traversing with /..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%5c..%5c..%5c..%5c..%5c..%5c..%5c..%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\%2e%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /..%255c..%255c..%255c..%255c..%255c..%255c..%255c..%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\%252e%252e\test-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255c%252e%252e%255ctest-file.txt
* File Serving dev mode should prevent traversing with /\../test-file.txt
* File Serving dev mode should prevent traversing with /\../\../test-file.txt
* File Serving dev mode should prevent traversing with /\../\../\../test-file.txt
* File Serving dev mode should prevent traversing with /\../\../\../\../test-file.txt
* File Serving dev mode should prevent traversing with /\../\../\../\../\../test-file.txt
* File Serving dev mode should prevent traversing with /\../\../\../\../\../\../test-file.txt
* File Serving dev mode should prevent traversing with /\../\../\../\../\../\../\../test-file.txt
* File Serving dev mode should prevent traversing with /\../\../\../\../\../\../\../\../test-file.txt
* File Serving dev mode should prevent traversing with //..\test-file.txt
* File Serving dev mode should prevent traversing with //..\/..\test-file.txt
* File Serving dev mode should prevent traversing with //..\/..\/..\test-file.txt
* File Serving dev mode should prevent traversing with //..\/..\/..\/..\test-file.txt
* File Serving dev mode should prevent traversing with //..\/..\/..\/..\/..\test-file.txt
* File Serving dev mode should prevent traversing with //..\/..\/..\/..\/..\/..\test-file.txt
* File Serving dev mode should prevent traversing with //..\/..\/..\/..\/..\/..\/..\test-file.txt
* File Serving dev mode should prevent traversing with //..\/..\/..\/..\/..\/..\/..\/..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/../../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\..\..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /.../test-file.txt
* File Serving dev mode should prevent traversing with /.../.../test-file.txt
* File Serving dev mode should prevent traversing with /.../.../.../test-file.txt
* File Serving dev mode should prevent traversing with /.../.../.../.../test-file.txt
* File Serving dev mode should prevent traversing with /.../.../.../.../.../test-file.txt
* File Serving dev mode should prevent traversing with /.../.../.../.../.../.../test-file.txt
* File Serving dev mode should prevent traversing with /.../.../.../.../.../.../.../test-file.txt
* File Serving dev mode should prevent traversing with /.../.../.../.../.../.../.../.../test-file.txt
* File Serving dev mode should prevent traversing with /...\test-file.txt
* File Serving dev mode should prevent traversing with /...\...\test-file.txt
* File Serving dev mode should prevent traversing with /...\...\...\test-file.txt
* File Serving dev mode should prevent traversing with /...\...\...\...\test-file.txt
* File Serving dev mode should prevent traversing with /...\...\...\...\...\test-file.txt
* File Serving dev mode should prevent traversing with /...\...\...\...\...\...\test-file.txt
* File Serving dev mode should prevent traversing with /...\...\...\...\...\...\...\test-file.txt
* File Serving dev mode should prevent traversing with /...\...\...\...\...\...\...\...\test-file.txt
* File Serving dev mode should prevent traversing with /..../test-file.txt
* File Serving dev mode should prevent traversing with /..../..../test-file.txt
* File Serving dev mode should prevent traversing with /..../..../..../test-file.txt
* File Serving dev mode should prevent traversing with /..../..../..../..../test-file.txt
* File Serving dev mode should prevent traversing with /..../..../..../..../..../test-file.txt
* File Serving dev mode should prevent traversing with /..../..../..../..../..../..../test-file.txt
* File Serving dev mode should prevent traversing with /..../..../..../..../..../..../..../test-file.txt
* File Serving dev mode should prevent traversing with /..../..../..../..../..../..../..../..../test-file.txt
* File Serving dev mode should prevent traversing with /....\test-file.txt
* File Serving dev mode should prevent traversing with /....\....\test-file.txt
* File Serving dev mode should prevent traversing with /....\....\....\test-file.txt
* File Serving dev mode should prevent traversing with /....\....\....\....\test-file.txt
* File Serving dev mode should prevent traversing with /....\....\....\....\....\test-file.txt
* File Serving dev mode should prevent traversing with /....\....\....\....\....\....\test-file.txt
* File Serving dev mode should prevent traversing with /....\....\....\....\....\....\....\test-file.txt
* File Serving dev mode should prevent traversing with /....\....\....\....\....\....\....\....\test-file.txt
* File Serving dev mode should prevent traversing with /........................................................................../test-file.txt
* File Serving dev mode should prevent traversing with /........................................................................../../test-file.txt
* File Serving dev mode should prevent traversing with /........................................................................../../../test-file.txt
* File Serving dev mode should prevent traversing with /........................................................................../../../../test-file.txt
* File Serving dev mode should prevent traversing with /........................................................................../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /........................................................................../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /........................................................................../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /........................................................................../../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /..........................................................................\test-file.txt
* File Serving dev mode should prevent traversing with /..........................................................................\..\test-file.txt
* File Serving dev mode should prevent traversing with /..........................................................................\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..........................................................................\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..........................................................................\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..........................................................................\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..........................................................................\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..........................................................................\..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /..%u2215test-file.txt
* File Serving dev mode should prevent traversing with /..%u2215..%u2215test-file.txt
* File Serving dev mode should prevent traversing with /..%u2215..%u2215..%u2215test-file.txt
* File Serving dev mode should prevent traversing with /..%u2215..%u2215..%u2215..%u2215test-file.txt
* File Serving dev mode should prevent traversing with /..%u2215..%u2215..%u2215..%u2215..%u2215test-file.txt
* File Serving dev mode should prevent traversing with /..%u2215..%u2215..%u2215..%u2215..%u2215..%u2215test-file.txt
* File Serving dev mode should prevent traversing with /..%u2215..%u2215..%u2215..%u2215..%u2215..%u2215..%u2215test-file.txt
* File Serving dev mode should prevent traversing with /..%u2215..%u2215..%u2215..%u2215..%u2215..%u2215..%u2215..%u2215test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e/test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e/%uff0e%uff0e/test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/%uff0e%uff0e/test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2215test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2215%uff0e%uff0e%u2215test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215%uff0e%uff0e%u2215test-file.txt
* File Serving dev mode should prevent traversing with /..%u2216test-file.txt
* File Serving dev mode should prevent traversing with /..%u2216..%u2216test-file.txt
* File Serving dev mode should prevent traversing with /..%u2216..%u2216..%u2216test-file.txt
* File Serving dev mode should prevent traversing with /..%u2216..%u2216..%u2216..%u2216test-file.txt
* File Serving dev mode should prevent traversing with /..%u2216..%u2216..%u2216..%u2216..%u2216test-file.txt
* File Serving dev mode should prevent traversing with /..%u2216..%u2216..%u2216..%u2216..%u2216..%u2216test-file.txt
* File Serving dev mode should prevent traversing with /..%u2216..%u2216..%u2216..%u2216..%u2216..%u2216..%u2216test-file.txt
* File Serving dev mode should prevent traversing with /..%u2216..%u2216..%u2216..%u2216..%u2216..%u2216..%u2216..%u2216test-file.txt
* File Serving dev mode should prevent traversing with /..%uEFC8test-file.txt
* File Serving dev mode should prevent traversing with /..%uEFC8..%uEFC8test-file.txt
* File Serving dev mode should prevent traversing with /..%uEFC8..%uEFC8..%uEFC8test-file.txt
* File Serving dev mode should prevent traversing with /..%uEFC8..%uEFC8..%uEFC8..%uEFC8test-file.txt
* File Serving dev mode should prevent traversing with /..%uEFC8..%uEFC8..%uEFC8..%uEFC8..%uEFC8test-file.txt
* File Serving dev mode should prevent traversing with /..%uEFC8..%uEFC8..%uEFC8..%uEFC8..%uEFC8..%uEFC8test-file.txt
* File Serving dev mode should prevent traversing with /..%uEFC8..%uEFC8..%uEFC8..%uEFC8..%uEFC8..%uEFC8..%uEFC8test-file.txt
* File Serving dev mode should prevent traversing with /..%uEFC8..%uEFC8..%uEFC8..%uEFC8..%uEFC8..%uEFC8..%uEFC8..%uEFC8test-file.txt
* File Serving dev mode should prevent traversing with /..%uF025test-file.txt
* File Serving dev mode should prevent traversing with /..%uF025..%uF025test-file.txt
* File Serving dev mode should prevent traversing with /..%uF025..%uF025..%uF025test-file.txt
* File Serving dev mode should prevent traversing with /..%uF025..%uF025..%uF025..%uF025test-file.txt
* File Serving dev mode should prevent traversing with /..%uF025..%uF025..%uF025..%uF025..%uF025test-file.txt
* File Serving dev mode should prevent traversing with /..%uF025..%uF025..%uF025..%uF025..%uF025..%uF025test-file.txt
* File Serving dev mode should prevent traversing with /..%uF025..%uF025..%uF025..%uF025..%uF025..%uF025..%uF025test-file.txt
* File Serving dev mode should prevent traversing with /..%uF025..%uF025..%uF025..%uF025..%uF025..%uF025..%uF025..%uF025test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e\test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e\%uff0e%uff0e\test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\%uff0e%uff0e\test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2216test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2216%uff0e%uff0e%u2216test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216test-file.txt
* File Serving dev mode should prevent traversing with /%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216%uff0e%uff0e%u2216test-file.txt
* File Serving dev mode should prevent traversing with /..0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /..0x2f..0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /..0x2f..0x2f..0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /..0x2f..0x2f..0x2f..0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /..0x2f..0x2f..0x2f..0x2f..0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /..0x2f..0x2f..0x2f..0x2f..0x2f..0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /..0x2f..0x2f..0x2f..0x2f..0x2f..0x2f..0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /..0x2f..0x2f..0x2f..0x2f..0x2f..0x2f..0x2f..0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e/test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e/0x2e0x2e/test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e/0x2e0x2e/0x2e0x2e/test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/0x2e0x2e/test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x2f0x2e0x2e0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2f0x2e0x2e0x2ftest-file.txt
* File Serving dev mode should prevent traversing with /..0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /..0x5c..0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /..0x5c..0x5c..0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /..0x5c..0x5c..0x5c..0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /..0x5c..0x5c..0x5c..0x5c..0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /..0x5c..0x5c..0x5c..0x5c..0x5c..0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /..0x5c..0x5c..0x5c..0x5c..0x5c..0x5c..0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /..0x5c..0x5c..0x5c..0x5c..0x5c..0x5c..0x5c..0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e\test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e\0x2e0x2e\test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e\0x2e0x2e\0x2e0x2e\test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\0x2e0x2e\test-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x5c0x2e0x2e0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5c0x2e0x2e0x5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%2f..%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%2f..%c0%2f..%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%2f..%c0%2f..%c0%2f..%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%2f..%c0%2f..%c0%2f..%c0%2f..%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%2f..%c0%2f..%c0%2f..%c0%2f..%c0%2f..%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%2f..%c0%2f..%c0%2f..%c0%2f..%c0%2f..%c0%2f..%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%2f..%c0%2f..%c0%2f..%c0%2f..%c0%2f..%c0%2f..%c0%2f..%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e/%c0%2e%c0%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/%c0%2e%c0%2e/test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2f%c0%2e%c0%2e%c0%2ftest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%5c..%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%5c..%c0%5c..%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%5c..%c0%5c..%c0%5c..%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%5c..%c0%5c..%c0%5c..%c0%5c..%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%5c..%c0%5c..%c0%5c..%c0%5c..%c0%5c..%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%5c..%c0%5c..%c0%5c..%c0%5c..%c0%5c..%c0%5c..%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..%c0%5c..%c0%5c..%c0%5c..%c0%5c..%c0%5c..%c0%5c..%c0%5c..%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e\%c0%2e%c0%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\%c0%2e%c0%2e\test-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with /%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5c%c0%2e%c0%2e%c0%5ctest-file.txt
* File Serving dev mode should prevent traversing with ////%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with ////%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with ////%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with ////%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with ////%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with ////%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with ////%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with ////%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2ftest-file.txt
* File Serving dev mode should prevent traversing with /\\\%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /\\\%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /\\\%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /\\\%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /\\\%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /\\\%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /\\\%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /\\\%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5c%2e%2e%5ctest-file.txt
* File Serving dev mode should prevent traversing with /..//test-file.txt
* File Serving dev mode should prevent traversing with /..//..//test-file.txt
* File Serving dev mode should prevent traversing with /..//..//..//test-file.txt
* File Serving dev mode should prevent traversing with /..//..//..//..//test-file.txt
* File Serving dev mode should prevent traversing with /..//..//..//..//..//test-file.txt
* File Serving dev mode should prevent traversing with /..//..//..//..//..//..//test-file.txt
* File Serving dev mode should prevent traversing with /..//..//..//..//..//..//..//test-file.txt
* File Serving dev mode should prevent traversing with /..//..//..//..//..//..//..//..//test-file.txt
* File Serving dev mode should prevent traversing with /..///test-file.txt
* File Serving dev mode should prevent traversing with /..///..///test-file.txt
* File Serving dev mode should prevent traversing with /..///..///..///test-file.txt
* File Serving dev mode should prevent traversing with /..///..///..///..///test-file.txt
* File Serving dev mode should prevent traversing with /..///..///..///..///..///test-file.txt
* File Serving dev mode should prevent traversing with /..///..///..///..///..///..///test-file.txt
* File Serving dev mode should prevent traversing with /..///..///..///..///..///..///..///test-file.txt
* File Serving dev mode should prevent traversing with /..///..///..///..///..///..///..///..///test-file.txt
* File Serving dev mode should prevent traversing with /..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\..\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\..\\..\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\..\\..\\..\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\..\\..\\..\\..\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\..\\..\\..\\..\\..\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\..\\..\\..\\..\\..\\..\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\\..\\\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\\..\\\..\\\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\\..\\\..\\\..\\\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\\..\\\..\\\..\\\..\\\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\\..\\\..\\\..\\\..\\\..\\\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\\\..\\\..\\\..\\\..\\\..\\\..\\\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /./\/./test-file.txt
* File Serving dev mode should prevent traversing with /./\/././\/./test-file.txt
* File Serving dev mode should prevent traversing with /./\/././\/././\/./test-file.txt
* File Serving dev mode should prevent traversing with /./\/././\/././\/././\/./test-file.txt
* File Serving dev mode should prevent traversing with /./\/././\/././\/././\/././\/./test-file.txt
* File Serving dev mode should prevent traversing with /./\/././\/././\/././\/././\/././\/./test-file.txt
* File Serving dev mode should prevent traversing with /./\/././\/././\/././\/././\/././\/././\/./test-file.txt
* File Serving dev mode should prevent traversing with /./\/././\/././\/././\/././\/././\/././\/././\/./test-file.txt
* File Serving dev mode should prevent traversing with /.\/\.\test-file.txt
* File Serving dev mode should prevent traversing with /.\/\.\.\/\.\test-file.txt
* File Serving dev mode should prevent traversing with /.\/\.\.\/\.\.\/\.\test-file.txt
* File Serving dev mode should prevent traversing with /.\/\.\.\/\.\.\/\.\.\/\.\test-file.txt
* File Serving dev mode should prevent traversing with /.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\test-file.txt
* File Serving dev mode should prevent traversing with /.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\test-file.txt
* File Serving dev mode should prevent traversing with /.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\test-file.txt
* File Serving dev mode should prevent traversing with /.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\test-file.txt
* File Serving dev mode should prevent traversing with /././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././../test-file.txt
* File Serving dev mode should prevent traversing with /././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././../../test-file.txt
* File Serving dev mode should prevent traversing with /././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././../../../test-file.txt
* File Serving dev mode should prevent traversing with /././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././../../../../test-file.txt
* File Serving dev mode should prevent traversing with /././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././././../../../../../../../../test-file.txt
* File Serving dev mode should prevent traversing with /.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\..\..\..\..\..\..\..\..\test-file.txt
* File Serving dev mode should prevent traversing with /./../test-file.txt
* File Serving dev mode should prevent traversing with /./.././../test-file.txt
* File Serving dev mode should prevent traversing with /./.././.././../test-file.txt
* File Serving dev mode should prevent traversing with /./.././.././.././../test-file.txt
* File Serving dev mode should prevent traversing with /./.././.././.././.././../test-file.txt
* File Serving dev mode should prevent traversing with /./.././.././.././.././.././../test-file.txt
* File Serving dev mode should prevent traversing with /./.././.././.././.././.././.././../test-file.txt
* File Serving dev mode should prevent traversing with /./.././.././.././.././.././.././.././../test-file.txt
* File Serving dev mode should prevent traversing with /.\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\..\.\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\..\.\..\.\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\..\.\..\.\..\.\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\..\.\..\.\..\.\..\.\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\..\.\..\.\..\.\..\.\..\.\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\..\.\..\.\..\.\..\.\..\.\..\.\..\test-file.txt
* File Serving dev mode should prevent traversing with /.\..\.\..\.\..\.\..\.\..\.\..\.\..\.\..\test-file.txt
* File Serving dev mode should prevent traversing with /.//..//test-file.txt
* File Serving dev mode should prevent traversing with /.//..//.//..//test-file.txt
* File Serving dev mode should prevent traversing with /.//..//.//..//.//..//test-file.txt
* File Serving dev mode should prevent traversing with /.//..//.//..//.//..//.//..//test-file.txt
* File Serving dev mode should prevent traversing with /.//..//.//..//.//..//.//..//.//..//test-file.txt
* File Serving dev mode should prevent traversing with /.//..//.//..//.//..//.//..//.//..//.//..//test-file.txt
* File Serving dev mode should prevent traversing with /.//..//.//..//.//..//.//..//.//..//.//..//.//..//test-file.txt
* File Serving dev mode should prevent traversing with /.//..//.//..//.//..//.//..//.//..//.//..//.//..//.//..//test-file.txt
* File Serving dev mode should prevent traversing with /.\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /.\\..\\.\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /.\\..\\.\\..\\.\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /.\\..\\.\\..\\.\\..\\.\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /.\\..\\.\\..\\.\\..\\.\\..\\.\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /.\\..\\.\\..\\.\\..\\.\\..\\.\\..\\.\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /.\\..\\.\\..\\.\\..\\.\\..\\.\\..\\.\\..\\.\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /.\\..\\.\\..\\.\\..\\.\\..\\.\\..\\.\\..\\.\\..\\.\\..\\test-file.txt
* File Serving dev mode should prevent traversing with /../test-file.txt
* File Serving dev mode should prevent traversing with /../..//test-file.txt
* File Serving dev mode should prevent traversing with /../..//../test-file.txt
* File Serving dev mode should prevent traversing with /../..//../..//test-file.txt
* File Serving dev mode should prevent traversing with /../..//../..//../test-file.txt
* File Serving dev mode should prevent traversing with /../..//../..//../..//test-file.txt
* File Serving dev mode should prevent traversing with /../..//../..//../..//../test-file.txt
* File Serving dev mode should prevent traversing with /../..//../..//../..//../..//test-file.txt
* File Serving dev mode should prevent traversing with /..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\..\\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\..\\..\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\..\\..\..\\..\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\..\\..\..\\..\..\\test-file.txt
* File Serving dev mode should prevent traversing with /..///test-file.txt
* File Serving dev mode should prevent traversing with /../..///test-file.txt
* File Serving dev mode should prevent traversing with /../..//..///test-file.txt
* File Serving dev mode should prevent traversing with /../..//../..///test-file.txt
* File Serving dev mode should prevent traversing with /../..//../..//..///test-file.txt
* File Serving dev mode should prevent traversing with /../..//../..//../..///test-file.txt
* File Serving dev mode should prevent traversing with /../..//../..//../..//..///test-file.txt
* File Serving dev mode should prevent traversing with /../..//../..//../..//../..///test-file.txt
* File Serving dev mode should prevent traversing with /..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\..\\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\..\\..\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\..\\..\..\\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /..\..\\..\..\\..\..\\..\..\\\test-file.txt
* File Serving dev mode should prevent traversing with /\..%2f
* File Serving dev mode should prevent traversing with /\..%2f\..%2f
* File Serving dev mode should prevent traversing with /\..%2f\..%2f\..%2f
* File Serving dev mode should prevent traversing with /\..%2f\..%2f\..%2f\..%2f
* File Serving dev mode should prevent traversing with /\..%2f\..%2f\..%2f\..%2f\..%2f
* File Serving dev mode should prevent traversing with /\..%2f\..%2f\..%2f\..%2f\..%2f\..%2f
* File Serving dev mode should prevent traversing with /\..%2f\..%2f\..%2f\..%2f\..%2f\..%2f\..%2f
* File Serving dev mode should prevent traversing with /\..%2f\..%2f\..%2f\..%2f\..%2f\..%2f\..%2f\..%2ftest-file.txt

test/integration/eslint/test/next-lint.test.js
* Next Lint First Time Setup  show a prompt to set up ESLint if no configuration detected
* Next Lint First Time Setup  installs eslint and eslint-config-next as devDependencies if missing with yarn
* Next Lint First Time Setup  installs eslint and eslint-config-next as devDependencies if missing with pnpm
* Next Lint First Time Setup  installs eslint and eslint-config-next as devDependencies if missing with npm
* Next Lint First Time Setup  creates .eslintrc.json file with a default configuration
* Next Lint First Time Setup  shows a successful message when completed
* Next Lint should generate next-env.d.ts before lint command
* Next Lint should not generate next-env.d.ts without typescript
* Next Lint should not generate next-env.d.ts without typescript
* Next Lint should not generate next-env.d.ts without typescript
* Next Lint should not generate next-env.d.ts without typescript
* Next Lint should add relative path for dist types in tsconfig.json when app dir exist
* Next Lint shows warnings and errors
* Next Lint base directories are linted by default
* Next Lint shows warnings and errors with next/core-web-vitals config
* Next Lint shows warnings and errors when extending plugin recommended config
* Next Lint shows warnings and errors when extending plugin core-web-vitals config
* Next Lint success message when no warnings or errors
* Next Lint don't create .eslintrc file if package.json has eslintConfig field
* Next Lint quiet flag suppresses warnings and only reports errors
* Next Lint custom directories
* Next Lint max warnings flag errors when warnings exceed threshold
* Next Lint max warnings flag does not error when warnings do not exceed threshold
* Next Lint format flag supports additional user-defined formats
* Next Lint file flag can selectively lint only a single file
* Next Lint file flag can selectively lints multiple files
* Next Lint output flag create a file respecting the chosen format
* Next Lint output flag create a file respecting the chosen format
* Next Lint show error message when the file path is a directory
* Next Lint lint files with cjs and mjs file extension

test/integration/filesystempublicroutes/test/index.test.js
* FileSystemPublicRoutes should route to public folder files

test/integration/getinitialprops/test/index.test.js
* getInitialProps dev mode should have gip in __NEXT_DATA__
* getInitialProps dev mode should not have gip in __NEXT_DATA__ for non-GIP page
* getInitialProps dev mode should have correct router.asPath for direct visit dynamic page
* getInitialProps dev mode should have correct router.asPath for direct visit dynamic page rewrite direct

test/integration/gssp-pageProps-merge/test/index.test.js
* pageProps GSSP conflict dev mode should merge _app pageProps and getServerSideProps props
* pageProps GSSP conflict dev mode should merge _app pageProps and getStaticProps props

test/integration/gip-identifier/test/index.test.js
* gip identifiers dev mode should not have gip or appGip in NEXT_DATA for page without getInitialProps
* gip identifiers dev mode should have gip in NEXT_DATA for page with getInitialProps
* gip identifiers dev mode should have gip and appGip in NEXT_DATA for page with getInitialProps and _app with getInitialProps
* gip identifiers dev mode should only have appGip in NEXT_DATA for page without getInitialProps and _app with getInitialProps

test/integration/hashbang/test/index.test.js
* Hashbang dev mode first-line hashbang (#!) parse should work for .js files
* Hashbang dev mode first-line hashbang (#!) parse should work for .mjs files
* Hashbang dev mode first-line hashbang (#!) parse should work for .cjs files

test/integration/gssp-redirect-with-rewrites/test/index.test.js
* getServerSideProps redirects should fallback to browser navigation for an unknown URL

test/integration/getserversideprops-preview/test/index.test.js
* ServerSide Props Preview Mode Development Mode should start development application
* ServerSide Props Preview Mode Development Mode should enable preview mode
* ServerSide Props Preview Mode Development Mode should return cookies to be expired after dev server reboot
* ServerSide Props Preview Mode Development Mode should start the client-side browser
* ServerSide Props Preview Mode Development Mode should fetch preview data on SSR
* ServerSide Props Preview Mode Development Mode should fetch preview data on CST
* ServerSide Props Preview Mode Development Mode should fetch prerendered data

test/integration/hydration/test/index.test.js
* Hydration dev mode hydrates correctly for normal page
* Hydration dev mode hydrates correctly for //
* Hydration dev mode should be able to navigate after loading //

test/integration/gssp-redirect-base-path/test/index.test.js
* GS(S)P Redirect Support dev mode should apply temporary redirect when visited directly for GSSP page
* GS(S)P Redirect Support dev mode should apply temporary redirect when visited directly basePath false for GSSP page
* GS(S)P Redirect Support dev mode should apply permanent redirect when visited directly for GSSP page
* GS(S)P Redirect Support dev mode should apply statusCode 301 redirect when visited directly for GSSP page
* GS(S)P Redirect Support dev mode should apply statusCode 303 redirect when visited directly for GSSP page
* GS(S)P Redirect Support dev mode should apply redirect when fallback GSP page is visited directly (internal dynamic)
* GS(S)P Redirect Support dev mode should apply redirect when fallback GSP page is visited directly (internal normal)
* GS(S)P Redirect Support dev mode should apply redirect when fallback GSP page is visited directly (external)
* GS(S)P Redirect Support dev mode should apply redirect when fallback GSP page is visited directly (external domain)
* GS(S)P Redirect Support dev mode should apply redirect when fallback GSSP page is visited directly (external domain)
* GS(S)P Redirect Support dev mode should apply redirect when GSSP page is navigated to client-side (internal dynamic)
* GS(S)P Redirect Support dev mode should apply redirect when GSSP page is navigated to client-side (internal normal)
* GS(S)P Redirect Support dev mode should apply redirect when GSSP page is navigated to client-side (external)
* GS(S)P Redirect Support dev mode should apply redirect when GSP page is navigated to client-side (internal)
* GS(S)P Redirect Support dev mode should apply redirect when GSP page is navigated to client-side (external)
* GS(S)P Redirect Support dev mode should not replace history of the origin page when GSSP page is navigated to client-side (internal normal)
* GS(S)P Redirect Support dev mode should not replace history of the origin page when GSSP page is navigated to client-side (external)
* GS(S)P Redirect Support dev mode should not replace history of the origin page when GSP page is navigated to client-side (internal)
* GS(S)P Redirect Support dev mode should not replace history of the origin page when GSP page is navigated to client-side (external)

test/integration/i18n-support-catchall/test/index.test.js
* i18n Support Root Catch-all dev mode should load the index route correctly SSR
* i18n Support Root Catch-all dev mode should load the index route correctly CSR
* i18n Support Root Catch-all dev mode should navigate to other locale index and back
* i18n Support Root Catch-all dev mode should navigate to other locale page and back

test/integration/gssp-redirect/test/index.test.js
* GS(S)P Redirect Support dev mode should apply temporary redirect when visited directly for GSSP page
* GS(S)P Redirect Support dev mode should apply permanent redirect when visited directly for GSSP page
* GS(S)P Redirect Support dev mode should apply statusCode 301 redirect when visited directly for GSSP page
* GS(S)P Redirect Support dev mode should apply statusCode 303 redirect when visited directly for GSSP page
* GS(S)P Redirect Support dev mode should apply redirect when fallback GSP page is visited directly (internal dynamic)
* GS(S)P Redirect Support dev mode should apply redirect when fallback blocking GSP page is visited directly (internal dynamic)
* GS(S)P Redirect Support dev mode should apply redirect when fallback blocking GSP page is visited directly (internal dynamic) second visit
* GS(S)P Redirect Support dev mode should apply redirect when fallback blocking GSP page is visited directly (internal dynamic) with revalidate
* GS(S)P Redirect Support dev mode should apply redirect when fallback blocking GSP page is visited directly (internal dynamic) with revalidate second visit
* GS(S)P Redirect Support dev mode should apply redirect when fallback GSP page is visited directly (external)
* GS(S)P Redirect Support dev mode should apply redirect when fallback GSP page is visited directly (external domain)
* GS(S)P Redirect Support dev mode should apply redirect when fallback GSSP page is visited directly (external domain)
* GS(S)P Redirect Support dev mode should apply redirect when GSSP page is navigated to client-side (internal dynamic)
* GS(S)P Redirect Support dev mode should apply redirect when GSSP page is navigated to client-side (internal normal)
* GS(S)P Redirect Support dev mode should apply redirect when GSSP page is navigated to client-side (external)
* GS(S)P Redirect Support dev mode should apply redirect when GSP page is navigated to client-side (internal)
* GS(S)P Redirect Support dev mode should apply redirect when GSP page is navigated to client-side (external)
* GS(S)P Redirect Support dev mode should not replace history of the origin page when GSSP page is navigated to client-side (internal normal)
* GS(S)P Redirect Support dev mode should not replace history of the origin page when GSSP page is navigated to client-side (external)
* GS(S)P Redirect Support dev mode should not replace history of the origin page when GSP page is navigated to client-side (internal)
* GS(S)P Redirect Support dev mode should not replace history of the origin page when GSP page is navigated to client-side (external)

test/integration/i18n-support-custom-error/test/index.test.js
* Custom routes i18n custom error dev mode should localized [slug] routes render correctly
* Custom routes i18n custom error dev mode handle custom http status maintaining locale props in custom _error page
* Custom routes i18n custom error dev mode handle default http status maintaining locale props in custom _error page
* Custom routes i18n custom error dev mode should work also on client side routing

test/integration/i18n-support-index-rewrite/test/index.test.js
* Custom routes i18n support index rewrite dev mode should rewrite index route correctly

test/integration/i18n-support-same-page-hash-change/test/index.test.js
* Hash changes i18n dev mode should update props on locale change with same hash
* Hash changes i18n dev mode should update props on locale change with same hash (dynamic page)
* Hash changes i18n dev mode should trigger hash change events

test/integration/i18n-support-fallback-rewrite-legacy/test/index.test.js
* i18n Support dev mode should not rewrite for index page
* i18n Support dev mode should not rewrite for dynamic page

test/integration/image-optimizer/test/content-disposition-type.test.ts
* with contentDispositionType attachment dev support with next.config.js should normalize invalid status codes
* with contentDispositionType attachment dev support with next.config.js should handle non-ascii characters in image url
* with contentDispositionType attachment dev support with next.config.js should maintain animated gif
* with contentDispositionType attachment dev support with next.config.js should maintain animated png
* with contentDispositionType attachment dev support with next.config.js should maintain animated png 2
* with contentDispositionType attachment dev support with next.config.js should maintain animated webp
* with contentDispositionType attachment dev support with next.config.js should not allow vector svg
* with contentDispositionType attachment dev support with next.config.js should not allow svg with application header
* with contentDispositionType attachment dev support with next.config.js should not allow svg with comma header
* with contentDispositionType attachment dev support with next.config.js should not allow svg with uppercase header
* with contentDispositionType attachment dev support with next.config.js should maintain ico format
* with contentDispositionType attachment dev support with next.config.js should maintain jpg format for old Safari
* with contentDispositionType attachment dev support with next.config.js should maintain png format for old Safari
* with contentDispositionType attachment dev support with next.config.js should downlevel webp format to jpeg for old Safari
* with contentDispositionType attachment dev support with next.config.js should downlevel avif format to jpeg for old Safari
* with contentDispositionType attachment dev support with next.config.js should fail when url is missing
* with contentDispositionType attachment dev support with next.config.js should fail when w is missing
* with contentDispositionType attachment dev support with next.config.js should fail when q is missing
* with contentDispositionType attachment dev support with next.config.js should fail when q is greater than 100
* with contentDispositionType attachment dev support with next.config.js should fail when q is less than 1
* with contentDispositionType attachment dev support with next.config.js should fail when w is 0
* with contentDispositionType attachment dev support with next.config.js should fail when w is less than 0
* with contentDispositionType attachment dev support with next.config.js should fail when w is not a number
* with contentDispositionType attachment dev support with next.config.js should fail when q is not a number
* with contentDispositionType attachment dev support with next.config.js should fail when domain is not defined in next.config.js
* with contentDispositionType attachment dev support with next.config.js should fail when width is not in next.config.js
* with contentDispositionType attachment dev support with next.config.js should emit blur svg when width is 8 in dev but not prod
* with contentDispositionType attachment dev support with next.config.js should emit blur svg when width is less than 8 in dev but not prod
* with contentDispositionType attachment dev support with next.config.js should resize relative url and webp Firefox accept header
* with contentDispositionType attachment dev support with next.config.js should resize relative url and png accept header
* with contentDispositionType attachment dev support with next.config.js should resize relative url with invalid accept header as png
* with contentDispositionType attachment dev support with next.config.js should resize relative url with invalid accept header as gif
* with contentDispositionType attachment dev support with next.config.js should resize relative url with invalid accept header as tiff
* with contentDispositionType attachment dev support with next.config.js should resize relative url and old Chrome accept header as webp
* with contentDispositionType attachment dev support with next.config.js should resize relative url and new Chrome accept header as avif
* with contentDispositionType attachment dev support with next.config.js should compress avif smaller than webp at q=100
* with contentDispositionType attachment dev support with next.config.js should compress avif smaller than webp at q=75
* with contentDispositionType attachment dev support with next.config.js should compress avif smaller than webp at q=50
* with contentDispositionType attachment dev support with next.config.js should resize absolute url from localhost
* with contentDispositionType attachment dev support with next.config.js should automatically detect image type when content-type is octet-stream
* with contentDispositionType attachment dev support with next.config.js should use cache and stale-while-revalidate when query is the same for external image
* with contentDispositionType attachment dev support with next.config.js should fail when url has file protocol
* with contentDispositionType attachment dev support with next.config.js should fail when url has ftp protocol
* with contentDispositionType attachment dev support with next.config.js should fail when internal url is not an image
* with contentDispositionType attachment dev support with next.config.js should fail when url fails to load an image
* with contentDispositionType attachment dev support with next.config.js should use cache and stale-while-revalidate when query is the same for internal image
* with contentDispositionType attachment dev support with next.config.js should use cached image file when parameters are the same for animated gif
* with contentDispositionType attachment dev support with next.config.js should set 304 status without body when etag matches if-none-match
* with contentDispositionType attachment dev support with next.config.js should maintain bmp
* with contentDispositionType attachment dev support with next.config.js should not resize if requested width is larger than original source image
* with contentDispositionType attachment dev support with next.config.js should not change the color type of a png
* with contentDispositionType attachment dev support with next.config.js should set cache-control to immutable for static images
* with contentDispositionType attachment dev support with next.config.js should error if the resource isn't a valid image
* with contentDispositionType attachment dev support with next.config.js should error if the image file does not exist
* with contentDispositionType attachment dev support with next.config.js should handle concurrent requests
* with contentDispositionType attachment dev support with next.config.js should not have sharp missing warning
* with contentDispositionType attachment dev support with next.config.js should not have sharp outdated warning

test/integration/i18n-support-fallback-rewrite/test/index.test.js
* i18n Support dev mode should not rewrite for index page
* i18n Support dev mode should not rewrite for dynamic page

test/integration/image-optimizer/test/index.test.ts
* Image Optimizer config checks should error when domains length exceeds 50
* Image Optimizer config checks should error when remotePatterns length exceeds 50
* Image Optimizer config checks should error when remotePatterns has invalid prop
* Image Optimizer config checks should error when remotePatterns is missing hostname
* Image Optimizer config checks should error when sizes length exceeds 25
* Image Optimizer config checks should error when deviceSizes contains invalid widths
* Image Optimizer config checks should error when imageSizes contains invalid widths
* Image Optimizer config checks should error when loader contains invalid value
* Image Optimizer config checks should error when images.formats contains invalid values
* Image Optimizer config checks should error when images.loader is assigned but images.path is not
* Image Optimizer config checks should error when images.loader and images.loaderFile are both assigned
* Image Optimizer config checks should error when images.loaderFile does not exist
* Image Optimizer config checks should error when images.dangerouslyAllowSVG is not a boolean
* Image Optimizer config checks should error when images.contentSecurityPolicy is not a string
* Image Optimizer config checks should error when images.contentDispositionType is not valid
* Image Optimizer config checks should error when images.minimumCacheTTL is not valid
* Image Optimizer config checks should error when images.unoptimized is not a boolean
* Image Optimizer Server support for trailingSlash in next.config.js should return successful response for original loader
* Image Optimizer dev support next.config.js cloudinary loader should 404 when loader is not default
* Image Optimizer images.unoptimized in next.config.js should 404 when unoptimized
* Image Optimizer dev support for dynamic blur placeholder should support width 8 per BLUR_IMG_SIZE with next dev

test/integration/image-optimizer/test/minimum-cache-ttl.test.ts
* with minimumCacheTTL of 5 sec dev support with next.config.js should normalize invalid status codes
* with minimumCacheTTL of 5 sec dev support with next.config.js should handle non-ascii characters in image url
* with minimumCacheTTL of 5 sec dev support with next.config.js should maintain animated gif
* with minimumCacheTTL of 5 sec dev support with next.config.js should maintain animated png
* with minimumCacheTTL of 5 sec dev support with next.config.js should maintain animated png 2
* with minimumCacheTTL of 5 sec dev support with next.config.js should maintain animated webp
* with minimumCacheTTL of 5 sec dev support with next.config.js should not allow vector svg
* with minimumCacheTTL of 5 sec dev support with next.config.js should not allow svg with application header
* with minimumCacheTTL of 5 sec dev support with next.config.js should not allow svg with comma header
* with minimumCacheTTL of 5 sec dev support with next.config.js should not allow svg with uppercase header
* with minimumCacheTTL of 5 sec dev support with next.config.js should maintain ico format
* with minimumCacheTTL of 5 sec dev support with next.config.js should maintain jpg format for old Safari
* with minimumCacheTTL of 5 sec dev support with next.config.js should maintain png format for old Safari
* with minimumCacheTTL of 5 sec dev support with next.config.js should downlevel webp format to jpeg for old Safari
* with minimumCacheTTL of 5 sec dev support with next.config.js should downlevel avif format to jpeg for old Safari
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when url is missing
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when w is missing
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when q is missing
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when q is greater than 100
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when q is less than 1
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when w is 0
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when w is less than 0
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when w is not a number
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when q is not a number
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when domain is not defined in next.config.js
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when width is not in next.config.js
* with minimumCacheTTL of 5 sec dev support with next.config.js should emit blur svg when width is 8 in dev but not prod
* with minimumCacheTTL of 5 sec dev support with next.config.js should emit blur svg when width is less than 8 in dev but not prod
* with minimumCacheTTL of 5 sec dev support with next.config.js should resize relative url and webp Firefox accept header
* with minimumCacheTTL of 5 sec dev support with next.config.js should resize relative url and png accept header
* with minimumCacheTTL of 5 sec dev support with next.config.js should resize relative url with invalid accept header as png
* with minimumCacheTTL of 5 sec dev support with next.config.js should resize relative url with invalid accept header as gif
* with minimumCacheTTL of 5 sec dev support with next.config.js should resize relative url with invalid accept header as tiff
* with minimumCacheTTL of 5 sec dev support with next.config.js should resize relative url and old Chrome accept header as webp
* with minimumCacheTTL of 5 sec dev support with next.config.js should resize relative url and new Chrome accept header as avif
* with minimumCacheTTL of 5 sec dev support with next.config.js should compress avif smaller than webp at q=100
* with minimumCacheTTL of 5 sec dev support with next.config.js should compress avif smaller than webp at q=75
* with minimumCacheTTL of 5 sec dev support with next.config.js should compress avif smaller than webp at q=50
* with minimumCacheTTL of 5 sec dev support with next.config.js should resize absolute url from localhost
* with minimumCacheTTL of 5 sec dev support with next.config.js should automatically detect image type when content-type is octet-stream
* with minimumCacheTTL of 5 sec dev support with next.config.js should use cache and stale-while-revalidate when query is the same for external image
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when url has file protocol
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when url has ftp protocol
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when internal url is not an image
* with minimumCacheTTL of 5 sec dev support with next.config.js should fail when url fails to load an image
* with minimumCacheTTL of 5 sec dev support with next.config.js should use cache and stale-while-revalidate when query is the same for internal image
* with minimumCacheTTL of 5 sec dev support with next.config.js should use cached image file when parameters are the same for animated gif
* with minimumCacheTTL of 5 sec dev support with next.config.js should set 304 status without body when etag matches if-none-match
* with minimumCacheTTL of 5 sec dev support with next.config.js should maintain bmp
* with minimumCacheTTL of 5 sec dev support with next.config.js should not resize if requested width is larger than original source image
* with minimumCacheTTL of 5 sec dev support with next.config.js should not change the color type of a png
* with minimumCacheTTL of 5 sec dev support with next.config.js should set cache-control to immutable for static images
* with minimumCacheTTL of 5 sec dev support with next.config.js should error if the resource isn't a valid image
* with minimumCacheTTL of 5 sec dev support with next.config.js should error if the image file does not exist
* with minimumCacheTTL of 5 sec dev support with next.config.js should handle concurrent requests
* with minimumCacheTTL of 5 sec dev support with next.config.js should not have sharp missing warning
* with minimumCacheTTL of 5 sec dev support with next.config.js should not have sharp outdated warning

test/integration/i18n-support-base-path/test/index.test.js
* i18n Support basePath dev mode should handle basePath like pathname
* i18n Support basePath dev mode should 404 for locale prefixed static assets correctly
* i18n Support basePath dev mode should 404 for locale prefixed public folder files
* i18n Support basePath dev mode should redirect external domain correctly
* i18n Support basePath dev mode should have domainLocales available on useRouter
* i18n Support basePath dev mode should not error with similar named cookie to locale cookie
* i18n Support basePath dev mode should not add duplicate locale key when navigating back to root path with query params
* i18n Support basePath dev mode should not add duplicate locale key when navigating back to root path with hash
* i18n Support basePath dev mode should handle navigating back to different casing of locale
* i18n Support basePath dev mode should have correct initial query values for fallback
* i18n Support basePath dev mode should navigate to page with same name as development buildId
* i18n Support basePath dev mode should prerender with the correct href for locale domain
* i18n Support basePath dev mode should render the correct href with locale domains but not on a locale domain
* i18n Support basePath dev mode should navigate through history with query correctly
* i18n Support basePath dev mode should resolve href correctly when dynamic route matches locale prefixed
* i18n Support basePath dev mode should use default locale when no locale is in href with locale false
* i18n Support basePath dev mode should show error for redirect and notFound returned at same time
* i18n Support basePath dev mode should have correct values for non-prefixed path
* i18n Support basePath dev mode should not have hydration mis-match from hash
* i18n Support basePath dev mode should resolve auto-export dynamic route correctly
* i18n Support basePath dev mode should navigate to auto-export dynamic page
* i18n Support basePath dev mode should apply trailingSlash redirect correctly
* i18n Support basePath dev mode should apply redirects correctly
* i18n Support basePath dev mode should apply headers correctly
* i18n Support basePath dev mode should visit API route directly correctly
* i18n Support basePath dev mode should visit dynamic API route directly correctly
* i18n Support basePath dev mode should rewrite to API route correctly for en-US locale
* i18n Support basePath dev mode should rewrite to API route correctly for nl-NL locale
* i18n Support basePath dev mode should rewrite to API route correctly for nl-BE locale
* i18n Support basePath dev mode should rewrite to API route correctly for nl locale
* i18n Support basePath dev mode should rewrite to API route correctly for fr-BE locale
* i18n Support basePath dev mode should rewrite to API route correctly for fr locale
* i18n Support basePath dev mode should rewrite to API route correctly for en locale
* i18n Support basePath dev mode should rewrite to API route correctly for go locale
* i18n Support basePath dev mode should rewrite to API route correctly for go-BE locale
* i18n Support basePath dev mode should rewrite to API route correctly for do locale
* i18n Support basePath dev mode should rewrite to API route correctly for do-BE locale
* i18n Support basePath dev mode should apply rewrites correctly
* i18n Support basePath dev mode should navigate with locale prop correctly
* i18n Support basePath dev mode should navigate with locale prop correctly GSP
* i18n Support basePath dev mode should navigate with locale false correctly
* i18n Support basePath dev mode should navigate with locale false correctly GSP
* i18n Support basePath dev mode should update asPath on the client correctly
* i18n Support basePath dev mode should use correct default locale for locale domains
* i18n Support basePath dev mode should not strip locale prefix for default locale with locale domains
* i18n Support basePath dev mode should not redirect to accept-lang preferred locale with locale cookie
* i18n Support basePath dev mode should redirect to correct locale domain
* i18n Support basePath dev mode should handle locales with domain for domain example.do should handle locale do-BE
* i18n Support basePath dev mode should handle locales with domain for domain example.do should handle locale go-BE
* i18n Support basePath dev mode should handle locales with domain for domain example.com should handle locale do-BE
* i18n Support basePath dev mode should handle locales with domain for domain example.com should handle locale go-BE
* i18n Support basePath dev mode should provide defaultLocale correctly for locale domain
* i18n Support basePath dev mode should generate AMP pages with all locales
* i18n Support basePath dev mode should work with AMP first page with all locales
* i18n Support basePath dev mode should generate fallbacks with all locales
* i18n Support basePath dev mode should generate auto-export page with all locales
* i18n Support basePath dev mode should generate non-dynamic GSP page with all locales
* i18n Support basePath dev mode should 404 for GSP pages that returned notFound
* i18n Support basePath dev mode should transition on client properly for page that starts with locale
* i18n Support basePath dev mode should 404 for GSP that returned notFound on client-transition
* i18n Support basePath dev mode should render 404 for fallback page that returned 404 on client transition
* i18n Support basePath dev mode should render 404 for fallback page that returned 404
* i18n Support basePath dev mode should render 404 for blocking fallback page that returned 404 on client transition
* i18n Support basePath dev mode should render 404 for blocking fallback page that returned 404
* i18n Support basePath dev mode should not remove locale prefix for default locale
* i18n Support basePath dev mode should load getStaticProps page correctly SSR (default locale no prefix)
* i18n Support basePath dev mode should load getStaticProps fallback prerender page correctly SSR (default locale no prefix)
* i18n Support basePath dev mode should load getStaticProps fallback non-prerender page correctly (default locale no prefix
* i18n Support basePath dev mode should redirect to locale prefixed route for /
* i18n Support basePath dev mode should use default locale for / without accept-language
* i18n Support basePath dev mode should load getStaticProps page correctly SSR
* i18n Support basePath dev mode should load getStaticProps fallback prerender page correctly SSR
* i18n Support basePath dev mode should load getStaticProps fallback non-prerender page correctly
* i18n Support basePath dev mode should load getServerSideProps page correctly SSR (default locale no prefix)
* i18n Support basePath dev mode should navigate client side for default locale with no prefix
* i18n Support basePath dev mode should load getStaticProps fallback non-prerender page another locale correctly
* i18n Support basePath dev mode should load getStaticProps non-fallback correctly
* i18n Support basePath dev mode should load getStaticProps non-fallback correctly another locale
* i18n Support basePath dev mode should load getStaticProps non-fallback correctly another locale via cookie
* i18n Support basePath dev mode should load getServerSideProps page correctly SSR
* i18n Support basePath dev mode should load dynamic getServerSideProps page correctly SSR
* i18n Support basePath dev mode should navigate to another page and back correctly with locale
* i18n Support basePath dev mode should navigate to getStaticProps page and back correctly with locale

test/integration/i18n-support/test/index.test.js
* i18n Support dev mode should 404 for locale prefixed static assets correctly
* i18n Support dev mode should 404 for locale prefixed public folder files
* i18n Support dev mode should redirect external domain correctly
* i18n Support dev mode should have domainLocales available on useRouter
* i18n Support dev mode should not error with similar named cookie to locale cookie
* i18n Support dev mode should not add duplicate locale key when navigating back to root path with query params
* i18n Support dev mode should not add duplicate locale key when navigating back to root path with hash
* i18n Support dev mode should handle navigating back to different casing of locale
* i18n Support dev mode should have correct initial query values for fallback
* i18n Support dev mode should navigate to page with same name as development buildId
* i18n Support dev mode should prerender with the correct href for locale domain
* i18n Support dev mode should render the correct href with locale domains but not on a locale domain
* i18n Support dev mode should navigate through history with query correctly
* i18n Support dev mode should resolve href correctly when dynamic route matches locale prefixed
* i18n Support dev mode should use default locale when no locale is in href with locale false
* i18n Support dev mode should show error for redirect and notFound returned at same time
* i18n Support dev mode should have correct values for non-prefixed path
* i18n Support dev mode should not have hydration mis-match from hash
* i18n Support dev mode should resolve auto-export dynamic route correctly
* i18n Support dev mode should navigate to auto-export dynamic page
* i18n Support dev mode should apply trailingSlash redirect correctly
* i18n Support dev mode should apply redirects correctly
* i18n Support dev mode should apply headers correctly
* i18n Support dev mode should visit API route directly correctly
* i18n Support dev mode should visit dynamic API route directly correctly
* i18n Support dev mode should rewrite to API route correctly for en-US locale
* i18n Support dev mode should rewrite to API route correctly for nl-NL locale
* i18n Support dev mode should rewrite to API route correctly for nl-BE locale
* i18n Support dev mode should rewrite to API route correctly for nl locale
* i18n Support dev mode should rewrite to API route correctly for fr-BE locale
* i18n Support dev mode should rewrite to API route correctly for fr locale
* i18n Support dev mode should rewrite to API route correctly for en locale
* i18n Support dev mode should rewrite to API route correctly for go locale
* i18n Support dev mode should rewrite to API route correctly for go-BE locale
* i18n Support dev mode should rewrite to API route correctly for do locale
* i18n Support dev mode should rewrite to API route correctly for do-BE locale
* i18n Support dev mode should apply rewrites correctly
* i18n Support dev mode should navigate with locale prop correctly
* i18n Support dev mode should navigate with locale prop correctly GSP
* i18n Support dev mode should navigate with locale false correctly
* i18n Support dev mode should navigate with locale false correctly GSP
* i18n Support dev mode should update asPath on the client correctly
* i18n Support dev mode should use correct default locale for locale domains
* i18n Support dev mode should not strip locale prefix for default locale with locale domains
* i18n Support dev mode should not redirect to accept-lang preferred locale with locale cookie
* i18n Support dev mode should redirect to correct locale domain
* i18n Support dev mode should handle locales with domain for domain example.do should handle locale do-BE
* i18n Support dev mode should handle locales with domain for domain example.do should handle locale go-BE
* i18n Support dev mode should handle locales with domain for domain example.com should handle locale do-BE
* i18n Support dev mode should handle locales with domain for domain example.com should handle locale go-BE
* i18n Support dev mode should provide defaultLocale correctly for locale domain
* i18n Support dev mode should generate AMP pages with all locales
* i18n Support dev mode should work with AMP first page with all locales
* i18n Support dev mode should generate fallbacks with all locales
* i18n Support dev mode should generate auto-export page with all locales
* i18n Support dev mode should generate non-dynamic GSP page with all locales
* i18n Support dev mode should 404 for GSP pages that returned notFound
* i18n Support dev mode should transition on client properly for page that starts with locale
* i18n Support dev mode should 404 for GSP that returned notFound on client-transition
* i18n Support dev mode should render 404 for fallback page that returned 404 on client transition
* i18n Support dev mode should render 404 for fallback page that returned 404
* i18n Support dev mode should render 404 for blocking fallback page that returned 404 on client transition
* i18n Support dev mode should render 404 for blocking fallback page that returned 404
* i18n Support dev mode should not remove locale prefix for default locale
* i18n Support dev mode should load getStaticProps page correctly SSR (default locale no prefix)
* i18n Support dev mode should load getStaticProps fallback prerender page correctly SSR (default locale no prefix)
* i18n Support dev mode should load getStaticProps fallback non-prerender page correctly (default locale no prefix
* i18n Support dev mode should redirect to locale prefixed route for /
* i18n Support dev mode should use default locale for / without accept-language
* i18n Support dev mode should load getStaticProps page correctly SSR
* i18n Support dev mode should load getStaticProps fallback prerender page correctly SSR
* i18n Support dev mode should load getStaticProps fallback non-prerender page correctly
* i18n Support dev mode should load getServerSideProps page correctly SSR (default locale no prefix)
* i18n Support dev mode should navigate client side for default locale with no prefix
* i18n Support dev mode should load getStaticProps fallback non-prerender page another locale correctly
* i18n Support dev mode should load getStaticProps non-fallback correctly
* i18n Support dev mode should load getStaticProps non-fallback correctly another locale
* i18n Support dev mode should load getStaticProps non-fallback correctly another locale via cookie
* i18n Support dev mode should load getServerSideProps page correctly SSR
* i18n Support dev mode should load dynamic getServerSideProps page correctly SSR
* i18n Support dev mode should navigate to another page and back correctly with locale
* i18n Support dev mode should navigate to getStaticProps page and back correctly with locale
* i18n Support with trailingSlash: true dev mode should redirect correctly
* i18n Support with trailingSlash: true dev mode should serve pages correctly with locale prefix
* i18n Support with trailingSlash: true dev mode should return 404 error for repeating locales
* i18n Support with trailingSlash: true dev mode should navigate between pages correctly
* i18n Support with trailingSlash: false dev mode should redirect correctly

test/integration/initial-ref/test/index.test.js
* Initial Refs dev mode Has correct initial ref values

test/integration/invalid-middleware-matchers/test/index.test.js
* Errors on invalid custom middleware matchers dev mode should error when source length is exceeded
* Errors on invalid custom middleware matchers dev mode should error during next build for invalid matchers

test/integration/invalid-custom-routes/test/index.test.js
* Errors on invalid custom routes dev mode should error when empty headers array is present on header item
* Errors on invalid custom routes dev mode should error when source and destination length is exceeded
* Errors on invalid custom routes dev mode should error during next build for invalid redirects
* Errors on invalid custom routes dev mode should error during next build for invalid rewrites
* Errors on invalid custom routes dev mode should error during next build for invalid headers
* Errors on invalid custom routes dev mode should show formatted error for redirect source parse fail
* Errors on invalid custom routes dev mode should show valid error when non-array is returned from rewrites
* Errors on invalid custom routes dev mode should show valid error when non-array is returned from redirects
* Errors on invalid custom routes dev mode should show valid error when non-array is returned from headers
* Errors on invalid custom routes dev mode should show valid error when segments not in source are used in destination

test/integration/invalid-multi-match/test/index.test.js
* Custom routes invalid multi-match dev mode should show error for invalid mulit-match

test/integration/invalid-server-options/test/index.test.js
* Invalid server options next() called with no parameters should throw error
* Invalid server options next() called with undefined parameter should throw error
* Invalid server options next() called with null parameter should throw error
* Invalid server options next() called with dev as string should send warning
* Invalid server options next() called with dev as number should send warning
* Invalid server options next() called with dev as array should send warning
* Invalid server options next() called with dev as object should send warning
* Invalid server options next() called with dev as function should send warning

test/integration/image-optimizer/test/sharp.test.ts
* with latest sharp dev support w/o next.config.js should handle non-ascii characters in image url
* with latest sharp dev support w/o next.config.js should maintain animated gif
* with latest sharp dev support w/o next.config.js should maintain animated png
* with latest sharp dev support w/o next.config.js should maintain animated png 2
* with latest sharp dev support w/o next.config.js should maintain animated webp
* with latest sharp dev support w/o next.config.js should not allow vector svg
* with latest sharp dev support w/o next.config.js should maintain ico format
* with latest sharp dev support w/o next.config.js should maintain jpg format for old Safari
* with latest sharp dev support w/o next.config.js should maintain png format for old Safari
* with latest sharp dev support w/o next.config.js should downlevel webp format to jpeg for old Safari
* with latest sharp dev support w/o next.config.js should downlevel avif format to jpeg for old Safari
* with latest sharp dev support w/o next.config.js should fail when url is missing
* with latest sharp dev support w/o next.config.js should fail when w is missing
* with latest sharp dev support w/o next.config.js should fail when q is missing
* with latest sharp dev support w/o next.config.js should fail when q is greater than 100
* with latest sharp dev support w/o next.config.js should fail when q is less than 1
* with latest sharp dev support w/o next.config.js should fail when w is 0
* with latest sharp dev support w/o next.config.js should fail when w is less than 0
* with latest sharp dev support w/o next.config.js should fail when w is not a number
* with latest sharp dev support w/o next.config.js should fail when q is not a number
* with latest sharp dev support w/o next.config.js should fail when domain is not defined in next.config.js
* with latest sharp dev support w/o next.config.js should fail when width is not in next.config.js
* with latest sharp dev support w/o next.config.js should emit blur svg when width is 8 in dev but not prod
* with latest sharp dev support w/o next.config.js should emit blur svg when width is less than 8 in dev but not prod
* with latest sharp dev support w/o next.config.js should resize relative url and webp Firefox accept header
* with latest sharp dev support w/o next.config.js should resize relative url and png accept header
* with latest sharp dev support w/o next.config.js should resize relative url with invalid accept header as png
* with latest sharp dev support w/o next.config.js should resize relative url with invalid accept header as gif
* with latest sharp dev support w/o next.config.js should resize relative url with invalid accept header as tiff
* with latest sharp dev support w/o next.config.js should resize relative url and old Chrome accept header as webp
* with latest sharp dev support w/o next.config.js should fail when url has file protocol
* with latest sharp dev support w/o next.config.js should fail when url has ftp protocol
* with latest sharp dev support w/o next.config.js should fail when internal url is not an image
* with latest sharp dev support w/o next.config.js should use cache and stale-while-revalidate when query is the same for internal image
* with latest sharp dev support w/o next.config.js should use cached image file when parameters are the same for animated gif
* with latest sharp dev support w/o next.config.js should set 304 status without body when etag matches if-none-match
* with latest sharp dev support w/o next.config.js should maintain bmp
* with latest sharp dev support w/o next.config.js should not resize if requested width is larger than original source image
* with latest sharp dev support w/o next.config.js should set cache-control to immutable for static images
* with latest sharp dev support w/o next.config.js should not have sharp missing warning
* with latest sharp dev support w/o next.config.js should not have sharp outdated warning
* with latest sharp dev support with next.config.js should normalize invalid status codes
* with latest sharp dev support with next.config.js should handle non-ascii characters in image url
* with latest sharp dev support with next.config.js should maintain animated gif
* with latest sharp dev support with next.config.js should maintain animated png
* with latest sharp dev support with next.config.js should maintain animated png 2
* with latest sharp dev support with next.config.js should maintain animated webp
* with latest sharp dev support with next.config.js should not allow vector svg
* with latest sharp dev support with next.config.js should maintain ico format
* with latest sharp dev support with next.config.js should maintain jpg format for old Safari
* with latest sharp dev support with next.config.js should maintain png format for old Safari
* with latest sharp dev support with next.config.js should downlevel webp format to jpeg for old Safari
* with latest sharp dev support with next.config.js should downlevel avif format to jpeg for old Safari
* with latest sharp dev support with next.config.js should fail when url is missing
* with latest sharp dev support with next.config.js should fail when w is missing
* with latest sharp dev support with next.config.js should fail when q is missing
* with latest sharp dev support with next.config.js should fail when q is greater than 100
* with latest sharp dev support with next.config.js should fail when q is less than 1
* with latest sharp dev support with next.config.js should fail when w is 0
* with latest sharp dev support with next.config.js should fail when w is less than 0
* with latest sharp dev support with next.config.js should fail when w is not a number
* with latest sharp dev support with next.config.js should fail when q is not a number
* with latest sharp dev support with next.config.js should fail when domain is not defined in next.config.js
* with latest sharp dev support with next.config.js should fail when width is not in next.config.js
* with latest sharp dev support with next.config.js should emit blur svg when width is 8 in dev but not prod
* with latest sharp dev support with next.config.js should emit blur svg when width is less than 8 in dev but not prod
* with latest sharp dev support with next.config.js should resize relative url and webp Firefox accept header
* with latest sharp dev support with next.config.js should resize relative url and png accept header
* with latest sharp dev support with next.config.js should resize relative url with invalid accept header as png
* with latest sharp dev support with next.config.js should resize relative url with invalid accept header as gif
* with latest sharp dev support with next.config.js should resize relative url with invalid accept header as tiff
* with latest sharp dev support with next.config.js should resize relative url and old Chrome accept header as webp
* with latest sharp dev support with next.config.js should resize relative url and new Chrome accept header as avif
* with latest sharp dev support with next.config.js should compress avif smaller than webp at q=100
* with latest sharp dev support with next.config.js should compress avif smaller than webp at q=75
* with latest sharp dev support with next.config.js should compress avif smaller than webp at q=50
* with latest sharp dev support with next.config.js should resize absolute url from localhost
* with latest sharp dev support with next.config.js should automatically detect image type when content-type is octet-stream
* with latest sharp dev support with next.config.js should use cache and stale-while-revalidate when query is the same for external image
* with latest sharp dev support with next.config.js should fail when url has file protocol
* with latest sharp dev support with next.config.js should fail when url has ftp protocol
* with latest sharp dev support with next.config.js should fail when internal url is not an image
* with latest sharp dev support with next.config.js should use cache and stale-while-revalidate when query is the same for internal image
* with latest sharp dev support with next.config.js should use cached image file when parameters are the same for animated gif
* with latest sharp dev support with next.config.js should set 304 status without body when etag matches if-none-match
* with latest sharp dev support with next.config.js should maintain bmp
* with latest sharp dev support with next.config.js should not resize if requested width is larger than original source image
* with latest sharp dev support with next.config.js should set cache-control to immutable for static images
* with latest sharp dev support with next.config.js should handle concurrent requests
* with latest sharp dev support with next.config.js should not have sharp missing warning
* with latest sharp dev support with next.config.js should not have sharp outdated warning

test/integration/invalid-href/test/index.test.js
* Invalid hrefs dev mode does not show error when mailto: is used as href on Link
* Invalid hrefs dev mode does not show error when https://google.com is used as href on Link
* Invalid hrefs dev mode shows error when dynamic route mismatch is used on Link
* Invalid hrefs dev mode shows error when internal href is used with external as
* Invalid hrefs dev mode does not throw error when dynamic route mismatch is used on Link and params are manually provided
* Invalid hrefs dev mode doesn't fail on invalid url
* Invalid hrefs dev mode shows warning when dynamic route mismatch is used on Link

test/integration/link-with-multiple-child/test/index.test.js
* single child
* multiple child with default legacyBehavior
* multiple child with forced legacyBehavior=false

test/integration/index-index/test/index.test.js
* nested index.js dev mode should ssr page /
* nested index.js dev mode should client render page /
* nested index.js dev mode should follow link to /
* nested index.js dev mode should ssr page /index
* nested index.js dev mode should client render page /index
* nested index.js dev mode should follow link to /index
* nested index.js dev mode should ssr page /index/user
* nested index.js dev mode should client render page /index/user
* nested index.js dev mode should follow link to /index/user
* nested index.js dev mode should ssr page /index/project
* nested index.js dev mode should client render page /index/project
* nested index.js dev mode should follow link to /index/project
* nested index.js dev mode should ssr page /index/index
* nested index.js dev mode should client render page /index/index
* nested index.js dev mode should follow link to /index/index
* nested index.js dev mode should 404 on /index/index/index
* nested index.js dev mode should not find a link to /index/index/index

test/integration/link-without-router/test/index.test.js
* Link without a router dev mode should not throw when rendered

test/integration/invalid-revalidate-values/test/index.test.js
* Invalid revalidate values should not show error initially
* Invalid revalidate values should not show error for false revalidate value
* Invalid revalidate values should not show error for true revalidate value
* Invalid revalidate values should show error for string revalidate value
* Invalid revalidate values should show error for null revalidate value
* Invalid revalidate values should show error for float revalidate value

test/integration/middleware-basic/test/index.test.js
* dev mode loads a middleware

test/integration/middleware-overrides-node.js-api/test/index.test.ts
* Middleware overriding a Node.js API dev mode does not show a warning and allows overriding

test/integration/link-ref/test/index.test.js
* Invalid hrefs dev mode should not have a race condition with a click handler
* Invalid hrefs dev mode should not show error for function component with forwardRef
* Invalid hrefs dev mode should not show error for class component as child of next/link
* Invalid hrefs dev mode should handle child ref with React.createRef
* Invalid hrefs dev mode should handle child ref that is a function

test/integration/middleware-src/test/index.test.js
* Middleware in src/ and / folders dev mode loads and runs only root middleware

test/integration/next-dynamic-css/test/index.test.js
* next/dynamic dev mode should load page correctly

test/integration/missing-document-component-error/test/index.test.js
* Missing _document components error should detect missing Html component
* Missing _document components error should detect missing Head component
* Missing _document components error should detect missing Main component
* Missing _document components error should detect missing NextScript component
* Missing _document components error should detect multiple missing document components

test/integration/middleware-dev-update/test/index.test.js
* Middleware development errors when middleware is removed sends response correctly
* Middleware development errors when middleware is removed and re-added sends response correctly
* Middleware development errors when middleware is added sends response correctly
* Middleware development errors when matcher is added sends response correctly

test/integration/image-optimizer/test/squoosh.test.ts
* with squoosh dev support w/o next.config.js should handle non-ascii characters in image url
* with squoosh dev support w/o next.config.js should maintain animated gif
* with squoosh dev support w/o next.config.js should maintain animated png
* with squoosh dev support w/o next.config.js should maintain animated png 2
* with squoosh dev support w/o next.config.js should maintain animated webp
* with squoosh dev support w/o next.config.js should not allow vector svg
* with squoosh dev support w/o next.config.js should not allow svg with application header
* with squoosh dev support w/o next.config.js should not allow svg with comma header
* with squoosh dev support w/o next.config.js should not allow svg with uppercase header
* with squoosh dev support w/o next.config.js should maintain ico format
* with squoosh dev support w/o next.config.js should maintain jpg format for old Safari
* with squoosh dev support w/o next.config.js should maintain png format for old Safari
* with squoosh dev support w/o next.config.js should downlevel webp format to jpeg for old Safari
* with squoosh dev support w/o next.config.js should downlevel avif format to jpeg for old Safari
* with squoosh dev support w/o next.config.js should fail when url is missing
* with squoosh dev support w/o next.config.js should fail when w is missing
* with squoosh dev support w/o next.config.js should fail when q is missing
* with squoosh dev support w/o next.config.js should fail when q is greater than 100
* with squoosh dev support w/o next.config.js should fail when q is less than 1
* with squoosh dev support w/o next.config.js should fail when w is 0
* with squoosh dev support w/o next.config.js should fail when w is less than 0
* with squoosh dev support w/o next.config.js should fail when w is not a number
* with squoosh dev support w/o next.config.js should fail when q is not a number
* with squoosh dev support w/o next.config.js should fail when domain is not defined in next.config.js
* with squoosh dev support w/o next.config.js should fail when width is not in next.config.js
* with squoosh dev support w/o next.config.js should emit blur svg when width is 8 in dev but not prod
* with squoosh dev support w/o next.config.js should emit blur svg when width is less than 8 in dev but not prod
* with squoosh dev support w/o next.config.js should resize relative url and webp Firefox accept header
* with squoosh dev support w/o next.config.js should resize relative url and png accept header
* with squoosh dev support w/o next.config.js should resize relative url with invalid accept header as png
* with squoosh dev support w/o next.config.js should resize relative url with invalid accept header as gif
* with squoosh dev support w/o next.config.js should resize relative url with invalid accept header as tiff
* with squoosh dev support w/o next.config.js should resize relative url and old Chrome accept header as webp
* with squoosh dev support w/o next.config.js should fail when url has file protocol
* with squoosh dev support w/o next.config.js should fail when url has ftp protocol
* with squoosh dev support w/o next.config.js should fail when internal url is not an image
* with squoosh dev support w/o next.config.js should use cache and stale-while-revalidate when query is the same for internal image
* with squoosh dev support w/o next.config.js should use cached image file when parameters are the same for animated gif
* with squoosh dev support w/o next.config.js should set 304 status without body when etag matches if-none-match
* with squoosh dev support w/o next.config.js should maintain bmp
* with squoosh dev support w/o next.config.js should not resize if requested width is larger than original source image
* with squoosh dev support w/o next.config.js should not change the color type of a png
* with squoosh dev support w/o next.config.js should set cache-control to immutable for static images
* with squoosh dev support w/o next.config.js should error if the resource isn't a valid image
* with squoosh dev support w/o next.config.js should error if the image file does not exist
* with squoosh dev support w/o next.config.js should not have sharp missing warning
* with squoosh dev support w/o next.config.js should not have sharp outdated warning
* with squoosh dev support with next.config.js should normalize invalid status codes
* with squoosh dev support with next.config.js should handle non-ascii characters in image url
* with squoosh dev support with next.config.js should maintain animated gif
* with squoosh dev support with next.config.js should maintain animated png
* with squoosh dev support with next.config.js should maintain animated png 2
* with squoosh dev support with next.config.js should maintain animated webp
* with squoosh dev support with next.config.js should not allow vector svg
* with squoosh dev support with next.config.js should not allow svg with application header
* with squoosh dev support with next.config.js should not allow svg with comma header
* with squoosh dev support with next.config.js should not allow svg with uppercase header
* with squoosh dev support with next.config.js should maintain ico format
* with squoosh dev support with next.config.js should maintain jpg format for old Safari
* with squoosh dev support with next.config.js should maintain png format for old Safari
* with squoosh dev support with next.config.js should downlevel webp format to jpeg for old Safari
* with squoosh dev support with next.config.js should downlevel avif format to jpeg for old Safari
* with squoosh dev support with next.config.js should fail when url is missing
* with squoosh dev support with next.config.js should fail when w is missing
* with squoosh dev support with next.config.js should fail when q is missing
* with squoosh dev support with next.config.js should fail when q is greater than 100
* with squoosh dev support with next.config.js should fail when q is less than 1
* with squoosh dev support with next.config.js should fail when w is 0
* with squoosh dev support with next.config.js should fail when w is less than 0
* with squoosh dev support with next.config.js should fail when w is not a number
* with squoosh dev support with next.config.js should fail when q is not a number
* with squoosh dev support with next.config.js should fail when domain is not defined in next.config.js
* with squoosh dev support with next.config.js should fail when width is not in next.config.js
* with squoosh dev support with next.config.js should emit blur svg when width is 8 in dev but not prod
* with squoosh dev support with next.config.js should emit blur svg when width is less than 8 in dev but not prod
* with squoosh dev support with next.config.js should resize relative url and webp Firefox accept header
* with squoosh dev support with next.config.js should resize relative url and png accept header
* with squoosh dev support with next.config.js should resize relative url with invalid accept header as png
* with squoosh dev support with next.config.js should resize relative url with invalid accept header as gif
* with squoosh dev support with next.config.js should resize relative url with invalid accept header as tiff
* with squoosh dev support with next.config.js should resize relative url and old Chrome accept header as webp
* with squoosh dev support with next.config.js should resize relative url and new Chrome accept header as avif
* with squoosh dev support with next.config.js should compress avif smaller than webp at q=100
* with squoosh dev support with next.config.js should compress avif smaller than webp at q=75
* with squoosh dev support with next.config.js should compress avif smaller than webp at q=50
* with squoosh dev support with next.config.js should resize absolute url from localhost
* with squoosh dev support with next.config.js should automatically detect image type when content-type is octet-stream
* with squoosh dev support with next.config.js should use cache and stale-while-revalidate when query is the same for external image
* with squoosh dev support with next.config.js should fail when url has file protocol
* with squoosh dev support with next.config.js should fail when url has ftp protocol
* with squoosh dev support with next.config.js should fail when internal url is not an image
* with squoosh dev support with next.config.js should fail when url fails to load an image
* with squoosh dev support with next.config.js should use cache and stale-while-revalidate when query is the same for internal image
* with squoosh dev support with next.config.js should use cached image file when parameters are the same for animated gif
* with squoosh dev support with next.config.js should set 304 status without body when etag matches if-none-match
* with squoosh dev support with next.config.js should maintain bmp
* with squoosh dev support with next.config.js should not resize if requested width is larger than original source image
* with squoosh dev support with next.config.js should not change the color type of a png
* with squoosh dev support with next.config.js should set cache-control to immutable for static images
* with squoosh dev support with next.config.js should error if the resource isn't a valid image
* with squoosh dev support with next.config.js should error if the image file does not exist
* with squoosh dev support with next.config.js should handle concurrent requests
* with squoosh dev support with next.config.js should not have sharp missing warning
* with squoosh dev support with next.config.js should not have sharp outdated warning

test/integration/jsconfig-baseurl/test/index.test.js
* TypeScript Features default behavior should render the page

test/integration/link-with-encoding/test/index.test.js
* Link Component with Encoding spaces should have correct query on SSR
* Link Component with Encoding spaces should have correct query on Router#push
* Link Component with Encoding spaces should have correct query on simple client-side <Link>
* Link Component with Encoding percent should have correct query on SSR
* Link Component with Encoding percent should have correct query on Router#push
* Link Component with Encoding percent should have correct query on simple client-side <Link>
* Link Component with Encoding forward slash should have correct query on SSR
* Link Component with Encoding forward slash should have correct query on Router#push
* Link Component with Encoding forward slash should have correct query on simple client-side <Link>
* Link Component with Encoding double quote should have correct query on SSR
* Link Component with Encoding double quote should have correct query on Router#push
* Link Component with Encoding double quote should have correct query on simple client-side <Link>
* Link Component with Encoding colon should have correct query on SSR
* Link Component with Encoding colon should have correct query on Router#push
* Link Component with Encoding colon should have correct query on simple client-side <Link>
* Link Component with Encoding colon should have correct parsing of url query params

test/integration/next-dynamic/test/index.test.js
* next/dynamic dev mode should render server value

test/integration/next-image-legacy/trailing-slash/test/index.test.ts
* Image Component Trailing Slash Tests dev mode should include trailing slash when trailingSlash is set on config file during next dev

test/integration/next-image-legacy/typescript/test/index.test.ts
* TypeScript Image Component development mode should have image types when enabled
* TypeScript Image Component development mode should render the valid Image usage and not print error
* TypeScript Image Component development mode should print error when invalid Image usage
* TypeScript Image Component development mode 2 should remove global image types when disabled (dev)

test/integration/next-image-legacy/base-path/test/index.test.ts
* Image Component basePath Tests dev mode should load the images
* Image Component basePath Tests dev mode should update the image on src change
* Image Component basePath Tests dev mode should work when using flexbox
* Image Component basePath Tests dev mode should work with layout-fixed so resizing window does not resize image
* Image Component basePath Tests dev mode should work with layout-intrinsic so resizing window maintains image aspect ratio
* Image Component basePath Tests dev mode should work with layout-responsive so resizing window maintains image aspect ratio
* Image Component basePath Tests dev mode should work with layout-fill to fill the parent but NOT stretch with viewport
* Image Component basePath Tests dev mode should work with layout-fill to fill the parent and stretch with viewport
* Image Component basePath Tests dev mode should work with sizes and automatically use layout-responsive
* Image Component basePath Tests dev mode should show missing src error
* Image Component basePath Tests dev mode should show invalid src error
* Image Component basePath Tests dev mode should show invalid src error when protocol-relative
* Image Component basePath Tests dev mode should correctly ignore prose styles

test/integration/next-image-legacy/unoptimized/test/index.test.ts
* Unoptimized Image Tests dev mode should not optimize any image

test/integration/next-image-new/base-path/test/index.test.js
* Image Component basePath Tests dev mode should load the images
* Image Component basePath Tests dev mode should update the image on src change
* Image Component basePath Tests dev mode should work when using flexbox
* Image Component basePath Tests dev mode should show missing src error
* Image Component basePath Tests dev mode should show invalid src error
* Image Component basePath Tests dev mode should show invalid src error when protocol-relative
* Image Component basePath Tests dev mode should correctly ignore prose styles

test/integration/next-image-new/both-basepath-trailingslash/test/index.test.ts
* Image Component basePath + trailingSlash Tests dev mode should correctly load image src from string

test/integration/next-image-new/export-config/test/index.test.ts
* next/image with output export config dev mode should error

test/integration/next-image-legacy/default/test/index.test.ts
* Image Component Tests dev mode should load the images
* Image Component Tests dev mode should preload priority images
* Image Component Tests dev mode should not pass through user-provided srcset (causing a flash)
* Image Component Tests dev mode should update the image on src change
* Image Component Tests dev mode should callback onLoadingComplete when image is fully loaded
* Image Component Tests dev mode should callback native onLoad in most cases
* Image Component Tests dev mode should callback native onError when error occured while loading image
* Image Component Tests dev mode should work with image with blob src
* Image Component Tests dev mode should work when using flexbox
* Image Component Tests dev mode should work with layout-fixed so resizing window does not resize image
* Image Component Tests dev mode should work with layout-intrinsic so resizing window maintains image aspect ratio
* Image Component Tests dev mode should work with layout-responsive so resizing window maintains image aspect ratio
* Image Component Tests dev mode should work with layout-fill to fill the parent but NOT stretch with viewport
* Image Component Tests dev mode should work with layout-fill to fill the parent and stretch with viewport
* Image Component Tests dev mode should work with sizes and automatically use layout-responsive
* Image Component Tests dev mode should handle the styles prop appropriately
* Image Component Tests dev mode should show missing src error
* Image Component Tests dev mode should show invalid src error
* Image Component Tests dev mode should show invalid src error when protocol-relative
* Image Component Tests dev mode should show error when string src and placeholder=blur and blurDataURL is missing
* Image Component Tests dev mode should show error when not numeric string width or height
* Image Component Tests dev mode should show error when static import and placeholder=blur and blurDataUrl is missing
* Image Component Tests dev mode should warn when img with layout=responsive is inside flex container
* Image Component Tests dev mode should warn when img with layout=fill is inside a container without position relative
* Image Component Tests dev mode should warn when using a very small image with placeholder=blur
* Image Component Tests dev mode should not warn when Image is child of p
* Image Component Tests dev mode should warn when priority prop is missing on LCP image
* Image Component Tests dev mode should warn when loader is missing width
* Image Component Tests dev mode should warn when using sizes with incorrect layout
* Image Component Tests dev mode should not warn when svg, even if with loader prop or without
* Image Component Tests dev mode should warn at most once even after state change
* Image Component Tests dev mode should correctly ignore prose styles
* Image Component Tests dev mode should apply style inheritance for img elements but not wrapper elements
* Image Component Tests dev mode should apply filter style after image loads
* Image Component Tests dev mode should emit image for next/dynamic with non ssr case
* Image Component Tests dev mode should have blurry placeholder when enabled
* Image Component Tests dev mode should not use blurry placeholder for <noscript> image
* Image Component Tests dev mode should remove blurry placeholder after image loads
* Image Component Tests dev mode should re-lazyload images after src changes
* Image Component Tests dev mode should initially load only two of four images using lazyroot
* Image Component Tests dev mode should be valid HTML

test/integration/next-image-new/loader-config-default-loader-with-file/test/index.test.ts
* Image Loader Config dev mode - component should work with loader prop
* Image Loader Config dev mode - getImgProps should work with loader prop

test/integration/next-image-legacy/base-path/test/static.test.ts
* Static Image Component Tests for basePath dev mode Should allow an image with a static src to omit height and width
* Static Image Component Tests for basePath dev mode Should use immutable cache-control header for static import
* Static Image Component Tests for basePath dev mode Should automatically provide an image height and width
* Static Image Component Tests for basePath dev mode Should allow provided width and height to override intrinsic

test/integration/next-image-new/base-path/test/static.test.js
* Static Image Component Tests for basePath dev mode Should allow an image with a static src to omit height and width
* Static Image Component Tests for basePath dev mode Should automatically provide an image height and width
* Static Image Component Tests for basePath dev mode should use width and height prop to override import
* Static Image Component Tests for basePath dev mode should use height prop to adjust both width and height
* Static Image Component Tests for basePath dev mode should use width prop to adjust both width and height
* Static Image Component Tests for basePath dev mode should add a data URL placeholder to an image

test/integration/next-image-new/app-dir/test/index.test.ts
* Image Component Default Tests dev mode should load the images
* Image Component Default Tests dev mode should preload priority images
* Image Component Default Tests dev mode should not pass through user-provided srcset (causing a flash)
* Image Component Default Tests dev mode should update the image on src change
* Image Component Default Tests dev mode should callback onLoadingComplete when image is fully loaded
* Image Component Default Tests dev mode should callback native onLoad with sythetic event
* Image Component Default Tests dev mode should callback native onError when error occured while loading image
* Image Component Default Tests dev mode should callback native onError even when error before hydration
* Image Component Default Tests dev mode should work with image with blob src
* Image Component Default Tests dev mode should work when using flexbox
* Image Component Default Tests dev mode should work with sizes and automatically use responsive srcset
* Image Component Default Tests dev mode should render no wrappers or sizers
* Image Component Default Tests dev mode should handle the styles prop appropriately
* Image Component Default Tests dev mode should warn when legacy prop layout=fill
* Image Component Default Tests dev mode should warn when legacy prop layout=responsive
* Image Component Default Tests dev mode should render picture via getImgProps
* Image Component Default Tests dev mode should show missing src error
* Image Component Default Tests dev mode should show empty string src error
* Image Component Default Tests dev mode should show invalid src error
* Image Component Default Tests dev mode should show invalid src error when protocol-relative
* Image Component Default Tests dev mode should show error when string src and placeholder=blur and blurDataURL is missing
* Image Component Default Tests dev mode should show error when invalid width prop
* Image Component Default Tests dev mode should show error when invalid Infinity width prop
* Image Component Default Tests dev mode should show error when invalid height prop
* Image Component Default Tests dev mode should show missing alt error
* Image Component Default Tests dev mode should show error when missing width prop
* Image Component Default Tests dev mode should show error when missing height prop
* Image Component Default Tests dev mode should show error when width prop on fill image
* Image Component Default Tests dev mode should show error when CSS position changed on fill image
* Image Component Default Tests dev mode should show error when static import and placeholder=blur and blurDataUrl is missing
* Image Component Default Tests dev mode should warn when using a very small image with placeholder=blur
* Image Component Default Tests dev mode should not warn when Image is child of p
* Image Component Default Tests dev mode should warn when priority prop is missing on LCP image
* Image Component Default Tests dev mode should warn when loader is missing width
* Image Component Default Tests dev mode should not warn when data url image with fill and sizes props
* Image Component Default Tests dev mode should not warn when svg, even if with loader prop or without
* Image Component Default Tests dev mode should warn at most once even after state change
* Image Component Default Tests dev mode should correctly ignore prose styles
* Image Component Default Tests dev mode should apply style inheritance for img elements but not wrapper elements
* Image Component Default Tests dev mode should apply filter style after image loads
* Image Component Default Tests dev mode should emit image for next/dynamic with non ssr case
* Image Component Default Tests dev mode Fill-mode tests should include a data-attribute on fill images
* Image Component Default Tests dev mode Fill-mode tests should add position:absolute to fill images
* Image Component Default Tests dev mode Fill-mode tests should add 100% width and height to fill images
* Image Component Default Tests dev mode Fill-mode tests should add position styles to fill images
* Image Component Default Tests dev mode Fill-mode tests should not log incorrect warnings
* Image Component Default Tests dev mode Fill-mode tests should log warnings when using fill mode incorrectly
* Image Component Default Tests dev mode Fill-mode tests should not log warnings when image unmounts
* Image Component Default Tests dev mode should have data url placeholder when enabled
* Image Component Default Tests dev mode should remove data url placeholder after image loads
* Image Component Default Tests dev mode should render correct objectFit when data url placeholder and fill
* Image Component Default Tests dev mode should have blurry placeholder when enabled
* Image Component Default Tests dev mode should remove blurry placeholder after image loads
* Image Component Default Tests dev mode should render correct objectFit when blurDataURL and fill
* Image Component Default Tests dev mode should be valid HTML

test/integration/next-image-new/default/test/index.test.ts
* Image Component Default Tests dev mode should load the images
* Image Component Default Tests dev mode should preload priority images
* Image Component Default Tests dev mode should not pass through user-provided srcset (causing a flash)
* Image Component Default Tests dev mode should update the image on src change
* Image Component Default Tests dev mode should callback onLoadingComplete when image is fully loaded
* Image Component Default Tests dev mode should callback native onLoad with sythetic event
* Image Component Default Tests dev mode should callback native onError when error occured while loading image
* Image Component Default Tests dev mode should callback native onError even when error before hydration
* Image Component Default Tests dev mode should work with image with blob src
* Image Component Default Tests dev mode should work when using flexbox
* Image Component Default Tests dev mode should work with sizes and automatically use responsive srcset
* Image Component Default Tests dev mode should render no wrappers or sizers
* Image Component Default Tests dev mode should handle the styles prop appropriately
* Image Component Default Tests dev mode should warn when legacy prop layout=fill
* Image Component Default Tests dev mode should warn when legacy prop layout=responsive
* Image Component Default Tests dev mode should render picture via getImgProps
* Image Component Default Tests dev mode should show missing src error
* Image Component Default Tests dev mode should show empty string src error
* Image Component Default Tests dev mode should show invalid src error
* Image Component Default Tests dev mode should show invalid src error when protocol-relative
* Image Component Default Tests dev mode should show error when string src and placeholder=blur and blurDataURL is missing
* Image Component Default Tests dev mode should show error when invalid width prop
* Image Component Default Tests dev mode should show error when invalid Infinity width prop
* Image Component Default Tests dev mode should show error when invalid height prop
* Image Component Default Tests dev mode should show missing alt error
* Image Component Default Tests dev mode should show error when missing width prop
* Image Component Default Tests dev mode should show error when missing height prop
* Image Component Default Tests dev mode should show error when width prop on fill image
* Image Component Default Tests dev mode should show error when CSS position changed on fill image
* Image Component Default Tests dev mode should show error when static import and placeholder=blur and blurDataUrl is missing
* Image Component Default Tests dev mode should warn when using a very small image with placeholder=blur
* Image Component Default Tests dev mode should not warn when Image is child of p
* Image Component Default Tests dev mode should warn when priority prop is missing on LCP image
* Image Component Default Tests dev mode should warn when loader is missing width
* Image Component Default Tests dev mode should not warn when data url image with fill and sizes props
* Image Component Default Tests dev mode should not warn when svg, even if with loader prop or without
* Image Component Default Tests dev mode should warn at most once even after state change
* Image Component Default Tests dev mode should correctly ignore prose styles
* Image Component Default Tests dev mode should apply style inheritance for img elements but not wrapper elements
* Image Component Default Tests dev mode should apply filter style after image loads
* Image Component Default Tests dev mode should emit image for next/dynamic with non ssr case
* Image Component Default Tests dev mode Fill-mode tests should include a data-attribute on fill images
* Image Component Default Tests dev mode Fill-mode tests should add position:absolute to fill images
* Image Component Default Tests dev mode Fill-mode tests should add 100% width and height to fill images
* Image Component Default Tests dev mode Fill-mode tests should add position styles to fill images
* Image Component Default Tests dev mode Fill-mode tests should not log incorrect warnings
* Image Component Default Tests dev mode Fill-mode tests should log warnings when using fill mode incorrectly
* Image Component Default Tests dev mode Fill-mode tests should not log warnings when image unmounts
* Image Component Default Tests dev mode should have data url placeholder when enabled
* Image Component Default Tests dev mode should remove data url placeholder after image loads
* Image Component Default Tests dev mode should render correct objectFit when data url placeholder and fill
* Image Component Default Tests dev mode should have blurry placeholder when enabled
* Image Component Default Tests dev mode should remove blurry placeholder after image loads
* Image Component Default Tests dev mode should render correct objectFit when blurDataURL and fill
* Image Component Default Tests dev mode should be valid HTML

test/integration/next-image-new/app-dir/test/static.test.ts
* Static Image Component Tests dev mode Should allow an image with a static src to omit height and width
* Static Image Component Tests dev mode Should automatically provide an image height and width
* Static Image Component Tests dev mode should use width and height prop to override import
* Static Image Component Tests dev mode should use height prop to adjust both width and height
* Static Image Component Tests dev mode should use width prop to adjust both width and height
* Static Image Component Tests dev mode should add a data URL placeholder to an image
* Static Image Component Tests dev mode should add placeholder with blurDataURL and fill
* Static Image Component Tests dev mode should add placeholder even when blurDataURL aspect ratio does not match width/height ratio
* Static Image Component Tests dev mode should load direct imported image

test/integration/next-image-new/default/test/static.test.ts
* Static Image Component Tests dev mode Should allow an image with a static src to omit height and width
* Static Image Component Tests dev mode Should automatically provide an image height and width
* Static Image Component Tests dev mode should use width and height prop to override import
* Static Image Component Tests dev mode should use height prop to adjust both width and height
* Static Image Component Tests dev mode should use width prop to adjust both width and height
* Static Image Component Tests dev mode should add a data URL placeholder to an image
* Static Image Component Tests dev mode should add placeholder with blurDataURL and fill
* Static Image Component Tests dev mode should add placeholder even when blurDataURL aspect ratio does not match width/height ratio
* Static Image Component Tests dev mode should load direct imported image
* Static Image Component Tests dev mode should load staticprops imported image

test/integration/next-image-new/typescript/test/index.test.ts
* TypeScript Image Component development mode should have image types when enabled
* TypeScript Image Component development mode should render the valid Image usage and not print error
* TypeScript Image Component development mode should print error when invalid Image usage
* TypeScript Image Component should remove global image types when disabled (dev)

test/integration/next-image-new/trailing-slash/test/index.test.ts
* Image Component Trailing Slash Tests dev mode should include trailing slash when trailingSlash is set on config file during next dev

test/integration/next-image-new/middleware/test/index.test.ts
* Image with middleware in edge func dev mode should not error

test/integration/no-override-next-props/test/index.test.js
* Dynamic require should show error when a Next prop is returned in _app.getInitialProps

test/integration/next-image-new/unoptimized/test/index.test.ts
* Unoptimized Image Tests dev mode - component should not optimize any image
* Unoptimized Image Tests dev mode - getImgProps should not optimize any image

test/integration/no-page-props/test/index.test.js
* Error no pageProps dev mode should load auto-export page correctly
* Error no pageProps dev mode should load getStaticProps page correctly
* Error no pageProps dev mode should load getServerSideProps page correctly
* Error no pageProps dev mode should load 404 page correctly
* Error no pageProps dev mode should navigate between pages correctly

test/integration/node-fetch-keep-alive/test/index.test.js
* node-fetch-keep-alive dev should send keep-alive for json API
* node-fetch-keep-alive dev should send keep-alive for getStaticProps
* node-fetch-keep-alive dev should send keep-alive for getStaticPaths
* node-fetch-keep-alive dev should send keep-alive for getServerSideProps

test/integration/nullish-config/test/index.test.js
* Nullish configs in next.config.js dev mode should ignore configs set to \`undefined\` in next.config.js
* Nullish configs in next.config.js dev mode should ignore configs set to \`null\` in next.config.js

test/integration/optional-chaining-nullish-coalescing/test/index.test.js
* Optional chaining and nullish coalescing support dev mode should support optional chaining
* Optional chaining and nullish coalescing support dev mode should support nullish coalescing

test/integration/plugin-mdx-rs/test/index.test.js
* MDX-rs Configuration MDX-rs Plugin support should render an MDX page correctly
* MDX-rs Configuration MDX-rs Plugin support should render an MDX page with component correctly
* MDX-rs Configuration MDX-rs Plugin support should render an MDX page with globally provided components (from \`mdx-components.js\`) correctly

test/integration/port-env-var/test/index.test.js
* PORT environment variable dev mode should serve on the configured port

test/integration/non-standard-node-env-warning/test/index.test.js
* Non-Standard NODE_ENV should not show the warning with no NODE_ENV set
* Non-Standard NODE_ENV should not show the warning with NODE_ENV set to valid value
* Non-Standard NODE_ENV should not show the warning with NODE_ENV set to valid value (custom server)
* Non-Standard NODE_ENV should show the warning with NODE_ENV set to invalid value
* Non-Standard NODE_ENV should show the warning with NODE_ENV set to invalid value (custom server)
* Non-Standard NODE_ENV should show the warning with NODE_ENV set to production with next dev

test/integration/page-extensions/test/index.test.js
* Page Extensions should throw if pageExtensions is an empty array
* Page Extensions should throw if pageExtensions has invalid extensions

test/integration/prerender-fallback-encoding/test/index.test.js
* Fallback path encoding dev mode should respond with the prerendered pages correctly
* Fallback path encoding dev mode should respond with the prerendered data correctly
* Fallback path encoding dev mode should render correctly in the browser for prerender paths
* Fallback path encoding dev mode should navigate client-side correctly with interpolating
* Fallback path encoding dev mode should navigate client-side correctly with string href

test/integration/production-start-no-build/test/index.test.js
* Production Usage without production build should show error when there is no production build

test/integration/prerender/test/index.test.js
* SSG Prerender dev mode getStaticPaths should work with firebase import and getStaticPaths
* SSG Prerender dev mode getStaticPaths should not cache getStaticPaths errors

test/integration/react-streaming/test/index.test.js
* streaming dev dev should render 500 error correctly

test/integration/preview-fallback/test/index.test.js
* Preview mode with fallback pages dev Mode should get preview cookie correctly
* Preview mode with fallback pages dev Mode should not write preview index SSG page to cache
* Preview mode with fallback pages dev Mode should not write preview dynamic prerendered SSG page to cache no fallback
* Preview mode with fallback pages dev Mode should not write preview dynamic SSG page to cache no fallback
* Preview mode with fallback pages dev Mode should not write preview dynamic prerendered SSG page to cache with fallback
* Preview mode with fallback pages dev Mode should not write preview dynamic non-prerendered SSG page to cache with fallback

test/integration/prerender-preview/test/index.test.js
* Prerender Preview Mode Development Mode should start development application
* Prerender Preview Mode Development Mode should enable preview mode
* Prerender Preview Mode Development Mode should return cookies to be expired after dev server reboot
* Prerender Preview Mode Development Mode should start the client-side browser
* Prerender Preview Mode Development Mode should fetch preview data on SSR
* Prerender Preview Mode Development Mode should fetch preview data on CST
* Prerender Preview Mode Development Mode should fetch prerendered data
* Prerender Preview Mode Development Mode should fetch live static props with preview active

test/integration/read-only-source-hmr/test/index.test.js
* Read-only source HMR should detect changes to a page
* Read-only source HMR should handle page deletion and subsequent recreation
* Read-only source HMR should detect a new page

test/integration/relay-graphql-swc-single-project/test/index.test.js
* Relay Compiler Transform - Single Project Config dev mode should resolve index page correctly

test/integration/react-18/test/index.test.js
* Basics default setting with react 18 dev should only render once in SSR
* Basics default setting with react 18 dev no warnings for image related link props
* Basics default setting with react 18 dev hydrates correctly for normal page
* Basics default setting with react 18 dev useId() values should match on hydration
* Concurrent mode in the experimental-edge runtime dev flushes styled-jsx styles as the page renders
* Concurrent mode in the experimental-edge runtime dev <RouteAnnouncer /> should not have the initial route announced
* Concurrent mode in the experimental-edge runtime dev should not have invalid config warning
* Concurrent mode in the nodejs runtime dev flushes styled-jsx styles as the page renders
* Concurrent mode in the nodejs runtime dev <RouteAnnouncer /> should not have the initial route announced
* Concurrent mode in the nodejs runtime dev should not have invalid config warning

test/integration/rewrites-destination-query-array/test/index.test.js
* rewrites destination query dev mode should contain all values passed in param as array

test/integration/rewrites-client-resolving/test/index.test.js
* Client-side rewrites resolving dev mode should break rewrites chain when dynamic route matches
* Client-side rewrites resolving dev mode should break rewrites chain when normal page matches
* Client-side rewrites resolving dev mode should break rewrites chain when dynamic catch-all route matches
* Client-side rewrites resolving dev mode should break rewrites chain when dynamic catch-all route multi-level matches
* Client-side rewrites resolving dev mode should break rewrites chain after matching /category

test/integration/repeated-slashes/test/index.test.js
* 404 handling custom _error next dev should normalize repeated slashes in redirects correctly
* 404 handling custom _error next dev should handle double slashes correctly
* 404 handling custom _error next dev should handle double slashes correctly with query
* 404 handling custom _error next dev should handle double slashes correctly with hash
* 404 handling custom _error next dev should handle double slashes correctly with encoded
* 404 handling custom _error next dev should handle double slashes correctly with encoded and query
* 404 handling custom _error next dev should handle double slashes correctly with encoded and hash
* 404 handling custom _error next dev should handle backslashes correctly
* 404 handling custom _error next dev should handle mixed backslashes/forward slashes correctly
* 404 handling custom _error next dev should handle slashes in next/link correctly
* 404 handling custom _error next dev should handle slashes in router push correctly
* 404 handling custom _error next dev should have no error from encoded slashes in router push

test/integration/route-index/test/index.test.js
* Route index handling dev mode should handle / correctly
* Route index handling dev mode should handle /index correctly
* Route index handling dev mode should handle /index/index correctly
* Route index handling dev mode should handle /index/?bar%60%3C%25%22%27%7B%24%2A%25%5C correctly
* Route index handling dev mode should handle /index?file%3A%5C correctly

test/integration/route-indexes/test/index.test.js
* Route indexes handling dev mode should handle / correctly
* Route indexes handling dev mode should handle /index correctly
* Route indexes handling dev mode should handle /index/index correctly
* Route indexes handling dev mode should handle /nested-index correctly
* Route indexes handling dev mode should handle /nested-index/index correctly
* Route indexes handling dev mode should handle /nested-index/index/index correctly
* Route indexes handling dev mode should handle /sub correctly
* Route indexes handling dev mode should handle /sub/index correctly
* Route indexes handling dev mode should handle /sub/index/index correctly
* Route indexes handling dev mode should handle /sub/another correctly
* Route indexes handling dev mode should handle /sub/another/index correctly
* Route indexes handling dev mode should handle /api/sub correctly
* Route indexes handling dev mode should handle /api/sub/index correctly
* Route indexes handling dev mode should handle /api/sub/index/index correctly
* Route indexes handling dev mode should handle /api/sub/another correctly
* Route indexes handling dev mode should handle /api/sub/another/index correctly

test/integration/router-hash-navigation/test/index.test.js
* router.isReady dev mode scrolls to top when href="/" and url already contains a hash

test/integration/router-is-ready-app-gip/test/index.test.js
* router.isReady with appGip dev mode isReady should be true immediately for pages without getStaticProps
* router.isReady with appGip dev mode isReady should be true immediately for pages without getStaticProps, with query
* router.isReady with appGip dev mode isReady should be true immediately for getStaticProps page without query
* router.isReady with appGip dev mode isReady should be true after query update for getStaticProps page with query

test/integration/router-prefetch/test/index.test.js
* Router prefetch dev mode should not prefetch
* Router prefetch dev mode should resolve prefetch promise

test/integration/router-rerender/test/index.test.js
* router rerender dev mode with middleware should not trigger unncessary rerenders when middleware is used

test/integration/route-load-cancel/test/index.test.js
* next/dynamic dev mode should cancel slow page loads on re-navigation

test/integration/router-is-ready/test/index.test.js
* router.isReady dev mode isReady should be true immediately for getInitialProps page
* router.isReady dev mode isReady should be true immediately for getInitialProps page with query
* router.isReady dev mode isReady should be true immediately for getServerSideProps page
* router.isReady dev mode isReady should be true immediately for getServerSideProps page with query
* router.isReady dev mode isReady should be true immediately for auto-export page without query
* router.isReady dev mode isReady should be true after query update for auto-export page with query
* router.isReady dev mode isReady should be true after query update for dynamic auto-export page without query
* router.isReady dev mode isReady should be true after query update for dynamic auto-export page with query
* router.isReady dev mode isReady should be true after query update for getStaticProps page with query
* router.isReady dev mode isReady should be true immediately for getStaticProps page without query

test/integration/scroll-back-restoration/test/index.test.js
* Scroll Restoration Support dev mode should restore the scroll position on navigating back

test/integration/src-dir-support-double-dir/test/index.test.js
* Dynamic Routing dev mode should render from pages
* Dynamic Routing dev mode should render not render from src/pages

test/integration/scss-modules/test/basic-scss.test.js
* Has CSS Module in computed styles in Development should have CSS for page
* Can hot reload CSS Module without losing state should update CSS color without remounting <input>

test/integration/src-dir-support/test/index.test.js
* Dynamic Routing dev mode should render normal route
* Dynamic Routing dev mode should render another normal route
* Dynamic Routing dev mode should render dynamic page
* Dynamic Routing dev mode should prioritize a non-dynamic page
* Dynamic Routing dev mode should render nested dynamic page
* Dynamic Routing dev mode should navigate to a dynamic page successfully
* Dynamic Routing dev mode should navigate to a nested dynamic page successfully
* Dynamic Routing dev mode should pass params in getInitialProps during SSR

test/integration/script-loader/test/index.test.js
* Next.js Script - Primary Strategies - Strict Mode priority afterInteractive
* Next.js Script - Primary Strategies - Strict Mode priority lazyOnload
* Next.js Script - Primary Strategies - Strict Mode priority beforeInteractive on navigate
* Next.js Script - Primary Strategies - Strict Mode onload fires correctly
* Next.js Script - Primary Strategies - Strict Mode priority beforeInteractive with inline script
* Next.js Script - Primary Strategies - Strict Mode priority beforeInteractive with inline script should execute
* Next.js Script - Primary Strategies - Strict Mode Does not duplicate inline scripts
* Next.js Script - Primary Strategies - Strict Mode onReady fires after load event and then on every subsequent re-mount
* Next.js Script - Primary Strategies - Strict Mode onReady should only fires once after loaded (issue #39993)

test/integration/ssg-dynamic-routes-404-page/test/index.test.js
* Custom 404 Page for static site generation with dynamic routes dev mode should respond to a not existing page with 404

test/integration/ssg-data-404/test/index.test.js
* SSG data 404 dev mode should hard navigate when a new deployment occurs

test/integration/static-page-name/test/index.test.js
* Static Page Name dev mode should render the page via SSR correctly
* Static Page Name dev mode should navigate to static page name correctly

test/integration/scss/test/basic-scss.test.js
* SCSS Support Has CSS in computed styles in Production should have CSS for page

test/integration/scss/test/css-and-styled-jsx.test.js
* Ordering with styled-jsx (dev) should have the correct color (css ordering)

test/integration/scss/test/dev-css-handling.test.js
* Has CSS in computed styles in Development should have CSS for page
* Body is not hidden when unused in Development should have body visible
* Body is not hidden when broken in Development should have body visible

test/integration/trailing-slash-dist/test/index.test.js
* Trailing slash in distDir dev mode supports trailing slash

test/integration/trailing-slashes-rewrite/test/index.test.js
* Trailing Slash Rewrite Proxying dev mode should resolve index page correctly
* Trailing Slash Rewrite Proxying dev mode should resolve products page correctly
* Trailing Slash Rewrite Proxying dev mode should resolve a dynamic page correctly
* Trailing Slash Rewrite Proxying dev mode should resolve a catch-all page correctly
* Trailing Slash Rewrite Proxying dev mode should proxy non-existent page correctly

test/integration/turbopack-unsupported-log/index.test.ts
* turbopack unsupported features log should not warn by default
* turbopack unsupported features log should not warn with empty next.config.js
* turbopack unsupported features log should warn with next.config.js with unsupported field

test/integration/typescript-baseurl/test/index.test.js
* TypeScript Features default behavior should render the page

test/integration/typescript-app-type-declarations/test/index.test.js
* TypeScript App Type Declarations should write a new next-env.d.ts if none exist
* TypeScript App Type Declarations should overwrite next-env.d.ts if an incorrect one exists
* TypeScript App Type Declarations should not touch an existing correct next-env.d.ts

test/integration/trailing-slashes-href-resolving/test/index.test.js
* href resolving trailing-slash dev mode should route to /blog/another/ correctly
* href resolving trailing-slash dev mode should route to /blog/first-post/ correctly
* href resolving trailing-slash dev mode should route to /catch-all/hello/world/ correctly
* href resolving trailing-slash dev mode should route to /catch-all/first/ correctly
* href resolving trailing-slash dev mode should route to /another/ correctly
* href resolving trailing-slash dev mode should route to /top-level-slug/ correctly

test/integration/typescript-workspaces-paths/packages/www/test/index.test.js
* TypeScript Features default behavior should alias components
* TypeScript Features default behavior should resolve the first item in the array first
* TypeScript Features default behavior should resolve the second item in as a fallback
* TypeScript Features default behavior should resolve a single matching alias

test/integration/typescript-hmr/test/index.test.js
* TypeScript HMR delete a page and add it back should detect the changes to typescript pages and display it
* TypeScript HMR should ignore type errors in development

test/integration/typescript-paths/test/index.test.js
* typescript paths default behavior should alias components
* typescript paths default behavior should resolve the first item in the array first
* typescript paths default behavior should resolve the second item in as a fallback
* typescript paths default behavior should resolve a single matching alias
* typescript paths without baseurl default behavior should alias components
* typescript paths without baseurl default behavior should resolve the first item in the array first
* typescript paths without baseurl default behavior should resolve the second item in as a fallback
* typescript paths without baseurl default behavior should resolve a single matching alias

test/integration/typescript/test/index.test.js
* TypeScript Features default behavior should render the page
* TypeScript Features default behavior should render the cookies page
* TypeScript Features default behavior should render the cookies page with cookies
* TypeScript Features default behavior should render the generics page
* TypeScript Features default behavior should respond to sync API route correctly
* TypeScript Features default behavior should respond to async API route correctly
* TypeScript Features default behavior should not fail to render when an inactive page has an error

test/integration/with-electron/test/index.test.js
* Should skip testing electron without process.env.TEST_ELECTRON set

test/integration/with-router/test/index.test.js
* withRouter SSR should show an error when trying to use router methods during SSR

test/integration/telemetry/test/index.test.js
* Telemetry CLI can print telemetry status
* Telemetry CLI can enable telemetry with flag
* Telemetry CLI can disable telemetry with flag
* Telemetry CLI can enable telemetry without flag
* Telemetry CLI can re-enable telemetry
* Telemetry CLI can disable telemetry without flag
* Telemetry CLI can re-disable telemetry
* Telemetry CLI can disable telemetry with env NEXT_TELEMETRY_DISABLED
* Telemetry CLI emits event when swc fails to load
* Telemetry CLI detects correct cli session defaults
* Telemetry CLI cli session: babel tooling config
* Telemetry CLI cli session: custom babel config (plugin)
* Telemetry CLI cli session: package.json custom babel config (plugin)
* Telemetry CLI cli session: custom babel config (preset)
* Telemetry CLI cli session: next config with webpack
* Telemetry CLI detects isSrcDir dir correctly for \`next dev\`

test/integration/telemetry/test/page-features.test.js
* page features telemetry detects --turbo correctly for \`next dev\` stopped

test/integration/trailing-slashes/test/index.test.js
* Trailing slashes dev mode, trailingSlash: false /about/ should redirect to /about
* Trailing slashes dev mode, trailingSlash: false /catch-all/hello/world/ should redirect to /catch-all/hello/world
* Trailing slashes dev mode, trailingSlash: false /catch-all/hello.world/ should redirect to /catch-all/hello.world
* Trailing slashes dev mode, trailingSlash: false / should resolve to /index.js, with router path /
* Trailing slashes dev mode, trailingSlash: false /about should resolve to /about.js, with router path /about
* Trailing slashes dev mode, trailingSlash: false /catch-all/hello/world should resolve to /catch-all/[...slug].js, with router path /catch-all/[...slug]
* Trailing slashes dev mode, trailingSlash: false /about?hello=world should resolve to /about.js, with router path /about
* Trailing slashes dev mode, trailingSlash: false / should client side render /index.js, with router path /
* Trailing slashes dev mode, trailingSlash: false /about should client side render /about.js, with router path /about
* Trailing slashes dev mode, trailingSlash: false /catch-all/hello/world should client side render /catch-all/[...slug].js, with router path /catch-all/[...slug]
* Trailing slashes dev mode, trailingSlash: false /about?hello=world should client side render /about.js, with router path /about
* Trailing slashes dev mode, trailingSlash: false /linker?href=/ should have href /
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about should have href /about
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about/ should have href /about
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about?hello=world should have href /about?hello=world
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about/?hello=world should have href /about?hello=world
* Trailing slashes dev mode, trailingSlash: false /linker?href=/catch-all/hello/ should have href /catch-all/hello
* Trailing slashes dev mode, trailingSlash: false /linker?href=/catch-all/hello.world/ should have href /catch-all/hello.world
* Trailing slashes dev mode, trailingSlash: false /linker?href=/ should navigate to /
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about should navigate to /about
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about/ should navigate to /about
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about?hello=world should navigate to /about?hello=world
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about/?hello=world should navigate to /about?hello=world
* Trailing slashes dev mode, trailingSlash: false /linker?href=/catch-all/hello/ should navigate to /catch-all/hello
* Trailing slashes dev mode, trailingSlash: false /linker?href=/catch-all/hello.world/ should navigate to /catch-all/hello.world
* Trailing slashes dev mode, trailingSlash: false /linker?href=/ should push route to /
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about should push route to /about
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about/ should push route to /about
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about?hello=world should push route to /about?hello=world
* Trailing slashes dev mode, trailingSlash: false /linker?href=/about/?hello=world should push route to /about?hello=world
* Trailing slashes dev mode, trailingSlash: false /linker?href=/catch-all/hello/ should push route to /catch-all/hello
* Trailing slashes dev mode, trailingSlash: false /linker?href=/catch-all/hello.world/ should push route to /catch-all/hello.world
* Trailing slashes dev mode, trailingSlash: false /external-linker?href=https://nextjs.org should have href https://nextjs.org
* Trailing slashes dev mode, trailingSlash: false /external-linker?href=https://nextjs.org/ should have href https://nextjs.org/
* Trailing slashes dev mode, trailingSlash: true /about should redirect to /about/
* Trailing slashes dev mode, trailingSlash: true /catch-all/hello/world should redirect to /catch-all/hello/world/
* Trailing slashes dev mode, trailingSlash: true /catch-all/hello.world/ should redirect to /catch-all/hello.world
* Trailing slashes dev mode, trailingSlash: true / should resolve to /index.js, with router path /
* Trailing slashes dev mode, trailingSlash: true /about/ should resolve to /about.js, with router path /about
* Trailing slashes dev mode, trailingSlash: true /catch-all/hello/world/ should resolve to /catch-all/[...slug].js, with router path /catch-all/[...slug]
* Trailing slashes dev mode, trailingSlash: true /about/?hello=world should resolve to /about.js, with router path /about
* Trailing slashes dev mode, trailingSlash: true / should client side render /index.js, with router path /
* Trailing slashes dev mode, trailingSlash: true /about/ should client side render /about.js, with router path /about
* Trailing slashes dev mode, trailingSlash: true /catch-all/hello/world/ should client side render /catch-all/[...slug].js, with router path /catch-all/[...slug]
* Trailing slashes dev mode, trailingSlash: true /about/?hello=world should client side render /about.js, with router path /about
* Trailing slashes dev mode, trailingSlash: true /linker?href=/ should have href /
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about should have href /about/
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about/ should have href /about/
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about?hello=world should have href /about/?hello=world
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about/?hello=world should have href /about/?hello=world
* Trailing slashes dev mode, trailingSlash: true /linker?href=/catch-all/hello/ should have href /catch-all/hello/
* Trailing slashes dev mode, trailingSlash: true /linker?href=/catch-all/hello.world/ should have href /catch-all/hello.world
* Trailing slashes dev mode, trailingSlash: true /linker?href=/ should navigate to /
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about should navigate to /about/
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about/ should navigate to /about/
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about?hello=world should navigate to /about/?hello=world
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about/?hello=world should navigate to /about/?hello=world
* Trailing slashes dev mode, trailingSlash: true /linker?href=/catch-all/hello/ should navigate to /catch-all/hello/
* Trailing slashes dev mode, trailingSlash: true /linker?href=/catch-all/hello.world/ should navigate to /catch-all/hello.world
* Trailing slashes dev mode, trailingSlash: true /linker?href=/ should push route to /
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about should push route to /about/
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about/ should push route to /about/
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about?hello=world should push route to /about/?hello=world
* Trailing slashes dev mode, trailingSlash: true /linker?href=/about/?hello=world should push route to /about/?hello=world
* Trailing slashes dev mode, trailingSlash: true /linker?href=/catch-all/hello/ should push route to /catch-all/hello/
* Trailing slashes dev mode, trailingSlash: true /linker?href=/catch-all/hello.world/ should push route to /catch-all/hello.world
* Trailing slashes dev mode, trailingSlash: true /external-linker?href=https://nextjs.org should have href https://nextjs.org
* Trailing slashes dev mode, trailingSlash: true /external-linker?href=https://nextjs.org/ should have href https://nextjs.org/
* Trailing slashes dev mode, with basepath, trailingSlash: true /docs/about should redirect to /docs/about/
* Trailing slashes dev mode, with basepath, trailingSlash: true /docs should redirect to /docs/
* Trailing slashes dev mode, with basepath, trailingSlash: true /docs/catch-all/hello/world should redirect to /docs/catch-all/hello/world/
* Trailing slashes dev mode, with basepath, trailingSlash: true /docs/catch-all/hello.world/ should redirect to /docs/catch-all/hello.world
* Trailing slashes dev mode, with basepath, trailingSlash: true /docs/linker?href=/about should have href /docs/about/
* Trailing slashes dev mode, with basepath, trailingSlash: true /docs/linker?href=/ should have href /docs/
* Trailing slashes dev mode, with basepath, trailingSlash: true /docs/linker?href=/about should navigate to /docs/about/
* Trailing slashes dev mode, with basepath, trailingSlash: true /docs/linker?href=/about should push route to /docs/about/
`;
