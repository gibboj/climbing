# Climbing Tracker
It just counts things, but it has the labels I want

Running
DEV

PROD
* npm run build
* sudo forever restart prod-server.js


## Uses:
* React ES6 Webpack Boilerplate
* Rechart (regretting this already)
* Redis
* Bulma

## Done:
[] Simple Counters
[] Save your total for the day
[] Graph your history
[] Put it on a real server. MVP baby!
[] UI - Font
[] UI - Structure

## Next Step:
[] UI - Graph Resize / Color

[] Mobile
[] FB login

## Features
[] Weight tracking
[] Sleep Tracking


### Lint Errors:


  server/dev-server.js:16:5
  ⚠   16:5    Unexpected console statement.                                                                                no-console
  ⚠   18:3    Unexpected console statement.                                                                                no-console

  webpack.config.production.js:49:1
  ✖   49:1    Unexpected var, use let or const instead.                                                                    no-var

  server/prod-server.js:14:3
  ⚠   14:3    Unexpected console statement.                                                                                no-console
  ✖   14:53   Missing semicolon.                                                                                           semi
  ✖   42:28   A space is required after ,.                                                                                 comma-spacing

  webpack.config.js:49:1
  ✖   49:1    Unexpected var, use let or const instead.                                                                    no-var
  ✖   49:33   Strings must use singlequote.                                                                                quotes
  ✖   66:11   Missing space before value for key proxy.                                                                    key-spacing
  ✖   79:27   Strings must use singlequote.                                                                                quotes
  ✖   90:19   Strings must use singlequote.                                                                                quotes
  ✖   90:35   Strings must use singlequote.                                                                                quotes
  ✖   90:49   Strings must use singlequote.                                                                                quotes

  scripts/modules/Grades.js:11:16
  ✖   11:16   onChange is missing in props validation                                                                      react/prop-types
  ✖   11:36   num is missing in props validation                                                                           react/prop-types
  ✖   15:16   onChange is missing in props validation                                                                      react/prop-types
  ✖   15:36   num is missing in props validation                                                                           react/prop-types
  ✖   18:9    Unexpected space before function parentheses.                                                                space-before-function-paren
  ✖   22:30   num is missing in props validation                                                                           react/prop-types
  ✖   25:56   count is missing in props validation                                                                         react/prop-types
  ✖   27:9    Visible, non-interactive elements should not have mouse or keyboard event listeners                          jsx-a11y/no-static-element-interactions
  ✖   28:9    Visible, non-interactive elements should not have mouse or keyboard event listeners                          jsx-a11y/no-static-element-interactions
  ✖   30:6    Missing semicolon.                                                                                           semi

  server/RedisController.js:5:5
  ⚠    8:29   Missing function expression name.                                                                            func-names
  ⚠    9:7    Unexpected console statement.                                                                                no-console
  ⚠   21:40   Missing function expression name.                                                                            func-names
  ⚠   22:7    Unexpected console statement.                                                                                no-console
  ⚠   33:15   Missing function expression name.                                                                            func-names
  ✖    5:5    Unexpected var, use let or const instead.                                                                    no-var
  ✖    5:17   Unexpected require().                                                                                        global-require
  ✖    6:41   Expected exception block, space or tab after // in comment.                                                  spaced-comment
  ✖    8:29   Unexpected function expression.                                                                              prefer-arrow-callback
  ✖    9:19   Unexpected string concatenation.                                                                             prefer-template
  ✖   12:3    Block must not be padded by blank lines.                                                                     padded-blocks
  ✖   13:16   Expected this to be used by class method getBaseDayKey.                                                      class-methods-use-this
  ✖   13:17   uid is defined but never used.                                                                               no-unused-vars
  ✖   14:9    today is never reassigned. Use const instead.                                                                prefer-const
  ✖   15:14   Unexpected string concatenation.                                                                             prefer-template
  ✖   16:8    Unexpected string concatenation.                                                                             prefer-template
  ✖   16:31   Infix operators must be spaced.                                                                              space-infix-ops
  ✖   20:19   callback is defined but never used.                                                                          no-unused-vars
  ✖   21:25   Unexpected string concatenation.                                                                             prefer-template
  ✖   21:28   Infix operators must be spaced.                                                                              space-infix-ops
  ✖   21:40   Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   23:7    res is not defined.                                                                                          no-undef
  ✖   24:7    Missing semicolon.                                                                                           semi
  ✖   28:9    key is never reassigned. Use const instead.                                                                  prefer-const
  ✖   29:28   Unexpected string concatenation.                                                                             prefer-template
  ✖   29:31   Infix operators must be spaced.                                                                              space-infix-ops
  ✖   29:43   Missing space before opening brace.                                                                          space-before-blocks
  ✖   31:15   Unexpected string concatenation.                                                                             prefer-template
  ✖   31:18   Infix operators must be spaced.                                                                              space-infix-ops
  ✖   32:18   Unexpected string concatenation.                                                                             prefer-template
  ✖   33:15   Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   33:23   Missing space before function parentheses.                                                                   space-before-function-paren
  ✖   34:15   previousClimbs is never reassigned. Use const instead.                                                       prefer-const
  ✖   35:11   Using ForInStatement is not allowed.                                                                         no-restricted-syntax
  ✖   35:11   The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.  guard-for-in
  ✖   35:15   There should be no spaces inside this paren.                                                                 space-in-parens
  ✖   35:21   day is never reassigned. Use const instead.                                                                  prefer-const
  ✖   36:33   A space is required after {.                                                                                 object-curly-spacing
  ✖   36:34   Expected property shorthand.                                                                                 object-shorthand
  ✖   36:75   A space is required before }.                                                                                object-curly-spacing
  ✖   38:11   Assignment to property of function parameter resp.                                                           no-param-reassign
  ✖   47:9    key is never reassigned. Use const instead.                                                                  prefer-const
  ✖   48:35   A space is required after ,.                                                                                 comma-spacing
  ✖   53:5    Expected exception block, space or tab after // in comment.                                                  spaced-comment
  ✖   54:9    key is never reassigned. Use const instead.                                                                  prefer-const
  ✖   54:16   Multiple spaces found before date.                                                                           no-multi-spaces
  ✖   59:22   Unexpected string concatenation.                                                                             prefer-template
  ✖   64:18   Missing () invoking a constructor.                                                                           new-parens

  scripts/App.js:3:19
  ⚠   77:15   Missing function expression name.                                                                            func-names
  ⚠   88:9    Unexpected constant condition.                                                                               no-constant-condition
  ⚠  109:18   Missing function expression name.                                                                            func-names
  ⚠  111:25   Missing function expression name.                                                                            func-names
  ⚠  131:15   Missing function expression name.                                                                            func-names
  ⚠  188:40   Missing function expression name.                                                                            func-names
  ⚠  193:40   Missing function expression name.                                                                            func-names
  ⚠  207:36   Missing function expression name.                                                                            func-names
  ✖    3:19   Unexpected use of file extension "js" for "./modules/Grades.js"                                              import/extensions
  ✖    4:1    Expected empty line after import statement not followed by another import.                                   import/newline-after-import
  ✖    4:19   A space is required after ,.                                                                                 comma-spacing
  ✖    4:39   A space is required after ,.                                                                                 comma-spacing
  ✖    4:67   A space is required before }.                                                                                object-curly-spacing
  ✖    4:74   Absolute imports should come before relative imports.                                                        import/first
  ✖    5:9    Strings must use singlequote.                                                                                quotes
  ✖    8:3    Useless constructor.                                                                                         no-useless-constructor
  ✖   14:33   isactive is missing in props validation                                                                      react/prop-types
  ✖   14:55   Infix operators must be spaced.                                                                              space-infix-ops
  ✖   15:9    Visible, non-interactive elements should not have mouse or keyboard event listeners                          jsx-a11y/no-static-element-interactions
  ✖   15:32   onClick is missing in props validation                                                                       react/prop-types
  ✖   16:29   name is missing in props validation                                                                          react/prop-types
  ✖   19:6    Missing semicolon.                                                                                           semi
  ✖   23:1    Declare only one React component per file                                                                    react/no-multi-comp
  ✖   24:3    Useless constructor.                                                                                         no-useless-constructor
  ✖   28:9    Unexpected space before function parentheses.                                                                space-before-function-paren
  ✖   33:62   today is missing in props validation                                                                         react/prop-types
  ✖   33:90   onChangeDate is missing in props validation                                                                  react/prop-types
  ✖   33:103  A space is required before closing bracket                                                                   react/jsx-space-before-closing
  ✖   35:6    Expected indentation of 4 spaces but found 5.                                                                indent
  ✖   35:7    Missing semicolon.                                                                                           semi
  ✖   39:16   Declare only one React component per file                                                                    react/no-multi-comp
  ✖   44:14   Missing space before value for key counts.                                                                   key-spacing
  ✖   45:11   Missing space before value for key sum.                                                                      key-spacing
  ✖   46:12   Missing space before value for key goal.                                                                     key-spacing
  ✖   47:16   Missing space before value for key topGrade.                                                                 key-spacing
  ✖   48:11   Missing space before value for key uid.                                                                      key-spacing
  ✖   50:16   Missing space before value for key previous.                                                                 key-spacing
  ✖   51:25   Missing space before value for key formattedPrevious.                                                        key-spacing
  ✖   55:5    Expected exception block, space or tab after // in comment.                                                  spaced-comment
  ✖   62:3    sumCounts should be placed after getDateFromString                                                           react/sort-comp
  ✖   62:12   Expected this to be used by class method sumCounts.                                                          class-methods-use-this
  ✖   64:5    Using ForInStatement is not allowed.                                                                         no-restricted-syntax
  ✖   64:5    The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.  guard-for-in
  ✖   64:14   grade is never reassigned. Use const instead.                                                                prefer-const
  ✖   71:5    Unexpected var, use let or const instead.                                                                    no-var
  ✖   72:9    url is never reassigned. Use const instead.                                                                  prefer-const
  ✖   72:15   Unexpected string concatenation.                                                                             prefer-template
  ✖   72:29   Infix operators must be spaced.                                                                              space-infix-ops
  ✖   74:7    Expected property shorthand.                                                                                 object-shorthand
  ✖   74:11   Missing space before value for key url.                                                                      key-spacing
  ✖   76:13   Strings must use singlequote.                                                                                quotes
  ✖   77:7    Expected method shorthand.                                                                                   object-shorthand
  ✖   77:15   Missing space before value for key success.                                                                  key-spacing
  ✖   78:13   state is never reassigned. Use const instead.                                                                prefer-const
  ✖   81:12   Multiple spaces found before else.                                                                           no-multi-spaces
  ✖   82:23   Infix operators must be spaced.                                                                              space-infix-ops
  ✖   83:52   Unary operator ++ used.                                                                                      no-plusplus
  ✖   88:9    Expected space(s) after "if".                                                                                keyword-spacing
  ✖   98:20   Unexpected space before function parentheses.                                                                space-before-function-paren
  ✖   98:21   Expected this to be used by class method getDateFromString.                                                  class-methods-use-this
  ✖   99:5    Unexpected var, use let or const instead.                                                                    no-var
  ✖   99:18   There should be no space after [.                                                                            array-bracket-spacing
  ✖   99:20   Strings must use singlequote.                                                                                quotes
  ✖   99:27   Strings must use singlequote.                                                                                quotes
  ✖   99:34   Strings must use singlequote.                                                                                quotes
  ✖   99:41   Strings must use singlequote.                                                                                quotes
  ✖   99:48   Strings must use singlequote.                                                                                quotes
  ✖   99:55   Strings must use singlequote.                                                                                quotes
  ✖  100:7    Strings must use singlequote.                                                                                quotes
  ✖  100:14   Strings must use singlequote.                                                                                quotes
  ✖  100:21   Strings must use singlequote.                                                                                quotes
  ✖  100:29   Strings must use singlequote.                                                                                quotes
  ✖  100:36   Strings must use singlequote.                                                                                quotes
  ✖  100:43   Strings must use singlequote.                                                                                quotes
  ✖  100:49   There should be no space before ].                                                                           array-bracket-spacing
  ✖  101:9    date is never reassigned. Use const instead.                                                                 prefer-const
  ✖  102:9    month is never reassigned. Use const instead.                                                                prefer-const
  ✖  103:12   Unexpected string concatenation.                                                                             prefer-template
  ✖  103:16   Infix operators must be spaced.                                                                              space-infix-ops
  ✖  103:20   Infix operators must be spaced.                                                                              space-infix-ops
  ✖  103:33   Infix operators must be spaced.                                                                              space-infix-ops
  ✖  106:22   Unexpected space before function parentheses.                                                                space-before-function-paren
  ✖  107:9    data is never reassigned. Use const instead.                                                                 prefer-const
  ✖  108:5    Unexpected var, use let or const instead.                                                                    no-var
  ✖  109:18   Expected to return a value in this function.                                                                 array-callback-return
  ✖  109:18   Unexpected function expression.                                                                              prefer-arrow-callback
  ✖  109:26   Missing space before function parentheses.                                                                   space-before-function-paren
  ✖  111:25   Expected to return a value in this function.                                                                 array-callback-return
  ✖  111:25   Unexpected function expression.                                                                              prefer-arrow-callback
  ✖  111:33   There should be no spaces inside this paren.                                                                 space-in-parens
  ✖  111:33   Missing space before function parentheses.                                                                   space-before-function-paren
  ✖  111:44   Missing space before opening brace.                                                                          space-before-blocks
  ✖  112:30   A space is required after ,.                                                                                 comma-spacing
  ✖  114:11   date is never reassigned. Use const instead.                                                                 prefer-const
  ✖  115:21   A space is required after {.                                                                                 object-curly-spacing
  ✖  115:41   Missing space before value for key points.                                                                   key-spacing
  ✖  115:44   A space is required before }.                                                                                object-curly-spacing
  ✖  121:5    Unexpected var, use let or const instead.                                                                    no-var
  ✖  122:15   Unexpected string concatenation.                                                                             prefer-template
  ✖  122:29   Infix operators must be spaced.                                                                              space-infix-ops
  ✖  124:14   Unexpected string concatenation.                                                                             prefer-template
  ✖  127:7    Expected property shorthand.                                                                                 object-shorthand
  ✖  127:11   Missing space before value for key url.                                                                      key-spacing
  ✖  129:13   Strings must use singlequote.                                                                                quotes
  ✖  130:28   A space is required after {.                                                                                 object-curly-spacing
  ✖  130:29   Extra space after key grades.                                                                                key-spacing
  ✖  130:55   A space is required before }.                                                                                object-curly-spacing
  ✖  131:7    Expected method shorthand.                                                                                   object-shorthand
  ✖  131:15   Missing space before value for key success.                                                                  key-spacing
  ✖  132:13   previous is never reassigned. Use const instead.                                                             prefer-const
  ✖  136:21   Strings must use singlequote.                                                                                quotes
  ✖  136:21   Unexpected string concatenation.                                                                             prefer-template
  ✖  137:14   Strings must use singlequote.                                                                                quotes
  ✖  137:14   Unexpected string concatenation.                                                                             prefer-template
  ✖  141:24   Expected === and instead saw ==.                                                                             eqeqeq
  ✖  143:46   Missing whitespace after semicolon.                                                                          semi-spacing
  ✖  143:47   Unary operator ++ used.                                                                                      no-plusplus
  ✖  151:27   A space is required after {.                                                                                 object-curly-spacing
  ✖  151:28   Unnecessarily quoted property day found.                                                                     quote-props
  ✖  151:34   Missing space before value for key day.                                                                      key-spacing
  ✖  151:66   A space is required before }.                                                                                object-curly-spacing
  ✖  154:26   Strings must use singlequote.                                                                                quotes
  ✖  157:13   formattedPrevious is never reassigned. Use const instead.                                                    prefer-const
  ✖  158:23   A space is required after {.                                                                                 object-curly-spacing
  ✖  158:24   Expected property shorthand.                                                                                 object-shorthand
  ✖  158:62   Expected property shorthand.                                                                                 object-shorthand
  ✖  158:71   Missing space before value for key previous.                                                                 key-spacing
  ✖  158:79   A space is required before }.                                                                                object-curly-spacing
  ✖  164:19   A space is required after {.                                                                                 object-curly-spacing
  ✖  164:20   Unnecessarily quoted property error found.                                                                   quote-props
  ✖  164:28   Missing space before value for key error.                                                                    key-spacing
  ✖  164:31   A space is required before }.                                                                                object-curly-spacing
  ✖  168:19   A space is required after {.                                                                                 object-curly-spacing
  ✖  168:26   Missing space before value for key today.                                                                    key-spacing
  ✖  168:44   A space is required before }.                                                                                object-curly-spacing
  ✖  172:9    counts is never reassigned. Use const instead.                                                               prefer-const
  ✖  174:19   A space is required after {.                                                                                 object-curly-spacing
  ✖  174:20   Expected property shorthand.                                                                                 object-shorthand
  ✖  174:27   Missing space before value for key counts.                                                                   key-spacing
  ✖  174:33   A space is required before }.                                                                                object-curly-spacing
  ✖  177:24   event is defined but never used.                                                                             no-unused-vars
  ✖  178:19   A space is required after {.                                                                                 object-curly-spacing
  ✖  178:30   Missing space before value for key activeTab.                                                                key-spacing
  ✖  178:34   A space is required before }.                                                                                object-curly-spacing
  ✖  181:26   e is defined but never used.                                                                                 no-unused-vars
  ✖  182:19   A space is required after {.                                                                                 object-curly-spacing
  ✖  182:56   A space is required before }.                                                                                object-curly-spacing
  ✖  186:5    Unexpected var, use let or const instead.                                                                    no-var
  ✖  188:9    grades is never reassigned. Use const instead.                                                               prefer-const
  ✖  188:40   Unexpected function expression.                                                                              prefer-arrow-callback
  ✖  188:48   Missing space before function parentheses.                                                                   space-before-function-paren
  ✖  188:62   Missing space before opening brace.                                                                          space-before-blocks
  ✖  189:26   Unexpected string concatenation.                                                                             prefer-template
  ✖  189:31   Infix operators must be spaced.                                                                              space-infix-ops
  ✖  189:32   Strings must use singlequote.                                                                                quotes
  ✖  189:95   A space is required before closing bracket                                                                   react/jsx-space-before-closing
  ✖  191:9    sum is never reassigned. Use const instead.                                                                  prefer-const
  ✖  193:9    rows is never reassigned. Use const instead.                                                                 prefer-const
  ✖  193:40   Unexpected function expression.                                                                              prefer-arrow-callback
  ✖  193:48   Missing space before function parentheses.                                                                   space-before-function-paren
  ✖  193:57   index is defined but never used.                                                                             no-unused-vars
  ✖  194:11   i is never reassigned. Use const instead.                                                                    prefer-const
  ✖  195:7    The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.  guard-for-in
  ✖  195:7    Using ForInStatement is not allowed.                                                                         no-restricted-syntax
  ✖  195:16   c is never reassigned. Use const instead.                                                                    prefer-const
  ✖  199:26   Missing semicolon.                                                                                           semi
  ✖  202:9    header is never reassigned. Use const instead.                                                               prefer-const
  ✖  203:15   Infix operators must be spaced.                                                                              space-infix-ops
  ✖  203:36   Unary operator ++ used.                                                                                      no-plusplus
  ✖  207:9    tabs is never reassigned. Use const instead.                                                                 prefer-const
  ✖  207:27   tabs is missing in props validation                                                                          react/prop-types
  ✖  207:32   tabs.map is missing in props validation                                                                      react/prop-types
  ✖  207:36   Unexpected function expression.                                                                              prefer-arrow-callback
  ✖  207:44   Missing space before function parentheses.                                                                   space-before-function-paren
  ✖  207:53   Missing space before opening brace.                                                                          space-before-blocks
  ✖  208:14   Empty components are self-closing                                                                            react/self-closing-comp
  ✖  208:24   Unexpected string concatenation.                                                                             prefer-template
  ✖  208:31   Infix operators must be spaced.                                                                              space-infix-ops
  ✖  208:32   Strings must use singlequote.                                                                                quotes
  ✖  208:150  Unnecessary use of boolean literals in conditional expression.                                               no-unneeded-ternary
  ✖  208:154  Infix operators must be spaced.                                                                              space-infix-ops
  ✖  208:169  Missing semicolon.                                                                                           semi
  ✖  220:80   Infix operators must be spaced.                                                                              space-infix-ops
  ✖  223:42   Visible, non-interactive elements should not have mouse or keyboard event listeners                          jsx-a11y/no-static-element-interactions
  ✖  229:16   A space is required before closing bracket                                                                   react/jsx-space-before-closing
  ✖  230:13   Visible, non-interactive elements should not have mouse or keyboard event listeners                          jsx-a11y/no-static-element-interactions
  ✖  235:82   Infix operators must be spaced.                                                                              space-infix-ops
  ✖  241:15   Expected indentation of 16 space characters but found 14.                                                    react/jsx-indent
  ✖  241:26   Unexpected usage of singlequote.                                                                             jsx-quotes
  ✖  241:45   Unexpected usage of singlequote.                                                                             jsx-quotes
  ✖  241:61   Unexpected usage of singlequote.                                                                             jsx-quotes
  ✖  259:15   Expected indentation of 16 space characters but found 14.                                                    react/jsx-indent
  ✖  265:83   Infix operators must be spaced.                                                                              space-infix-ops
  ✖  270:95   onChangeDate is missing in props validation                                                                  react/prop-types
  ✖  270:108  A space is required before closing bracket                                                                   react/jsx-space-before-closing
  ✖  289:13   Empty components are self-closing                                                                            react/self-closing-comp
  ✖  299:8    Missing space before value for key tabs.                                                                     key-spacing
  ✖  300:2    Missing semicolon.                                                                                           semi

  16 warnings
  253 errors
