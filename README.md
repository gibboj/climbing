# Climbing Tracker
It just counts things, but it has the labels I want

Running
DEV

PROD
* sudo forever start prod-server.js


## Uses:
* React ES6 Webpack Boilerplate
* Rechart (regretting this already)
* Redis
* Blueprint

## Done:
[] Simple Counters
[] Save your total for the day
[] Graph your history

## Next Step:
[] Put it on a real server. MVP baby!
[] UI - Graph Resize / Color
[] UI - Font
[] UI - Structure
[] Mobile
[] FB login

## Features
[] Weight tracking
[] Sleep Tracking


### Lint Errors:

  webpack.config.js:65:11
  ✖   65:11  Missing space before value for key proxy.                                                                    key-spacing

  server/dev-server.js:11:5
  ⚠   16:5   Unexpected console statement.                                                                                no-console
  ⚠   18:3   Unexpected console statement.                                                                                no-console
  ✖   11:5   Strings must use singlequote.                                                                                quotes
  ✖   11:10  Strings must use singlequote.                                                                                quotes

  server/prod-server.js:1:1
  ⚠   12:18  Missing function expression name.                                                                            func-names
  ⚠   13:3   Unexpected console statement.                                                                                no-console
  ⚠   16:14  Missing function expression name.                                                                            func-names
  ⚠   20:29  Missing function expression name.                                                                            func-names
  ⚠   21:18  Missing function expression name.                                                                            func-names
  ⚠   28:52  Missing function expression name.                                                                            func-names
  ⚠   41:41  Missing function expression name.                                                                            func-names
  ✖    1:1   Unexpected var, use let or const instead.                                                                    no-var
  ✖    2:1   Unexpected var, use let or const instead.                                                                    no-var
  ✖    3:1   Expected empty line after require statement not followed by another require.                                 import/newline-after-import
  ✖    3:1   Unexpected var, use let or const instead.                                                                    no-var
  ✖    4:1   Unexpected var, use let or const instead.                                                                    no-var
  ✖    5:1   Unexpected var, use let or const instead.                                                                    no-var
  ✖   10:1   Unexpected var, use let or const instead.                                                                    no-var
  ✖   10:1   All var declarations must be at the top of the function scope.                                               vars-on-top
  ✖   10:35  Missing semicolon.                                                                                           semi
  ✖   12:18  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   13:53  Missing semicolon.                                                                                           semi
  ✖   16:14  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   16:22  Missing space before function parentheses.                                                                   space-before-function-paren
  ✖   16:32  Missing space before opening brace.                                                                          space-before-blocks
  ✖   17:30  A space is required after `.                                                                                 object-curly-spacing
  ✖   17:47  A space is required before ñ.                                                                                object-curly-spacing
  ✖   20:29  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   20:37  Missing space before function parentheses.                                                                   space-before-function-paren
  ✖   20:47  Missing space before opening brace.                                                                          space-before-blocks
  ✖   21:7   callback is never reassigned. Use const instead.                                                             prefer-const
  ✖   28:39  A space is required after ,.                                                                                 comma-spacing
  ✖   28:52  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   29:7   grade is never reassigned. Use const instead.                                                                prefer-const
  ✖   31:9   result is never reassigned. Use const instead.                                                               prefer-const
  ✖   33:16  A space is required after `.                                                                                 object-curly-spacing
  ✖   33:17  Unnecessarily quoted property result found.                                                                  quote-props
  ✖   33:36  A space is required before ñ.                                                                                object-curly-spacing
  ✖   37:12  A space is required after `.                                                                                 object-curly-spacing
  ✖   37:13  Unnecessarily quoted property result found.                                                                  quote-props
  ✖   37:30  A space is required before ñ.                                                                                object-curly-spacing
  ✖   41:28  A space is required after ,.                                                                                 comma-spacing
  ✖   41:41  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   42:7   grade is never reassigned. Use const instead.                                                                prefer-const
  ✖   44:9   result is never reassigned. Use const instead.                                                               prefer-const
  ✖   46:16  A space is required after `.                                                                                 object-curly-spacing
  ✖   46:17  Unnecessarily quoted property result found.                                                                  quote-props
  ✖   46:36  A space is required before ñ.                                                                                object-curly-spacing
  ✖   50:12  A space is required after `.                                                                                 object-curly-spacing
  ✖   50:13  Unnecessarily quoted property result found.                                                                  quote-props
  ✖   50:30  A space is required before ñ.                                                                                object-curly-spacing

  server/RedisController.js:5:5
  ⚠    8:29  Missing function expression name.                                                                            func-names
  ⚠    9:7   Unexpected console statement.                                                                                no-console
  ⚠   21:40  Missing function expression name.                                                                            func-names
  ⚠   22:7   Unexpected console statement.                                                                                no-console
  ⚠   33:15  Missing function expression name.                                                                            func-names
  ✖    5:5   Unexpected var, use let or const instead.                                                                    no-var
  ✖    5:17  Unexpected require().                                                                                        global-require
  ✖    6:41  Expected exception block, space or tab after // in comment.                                                  spaced-comment
  ✖    8:20  Strings must use singlequote.                                                                                quotes
  ✖    8:29  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖    9:19  Unexpected string concatenation.                                                                             prefer-template
  ✖    9:19  Strings must use singlequote.                                                                                quotes
  ✖   12:3   Block must not be padded by blank lines.                                                                     padded-blocks
  ✖   13:16  Expected this to be used by class method getBaseDayKey.                                                      class-methods-use-this
  ✖   13:17  uid is defined but never used.                                                                               no-unused-vars
  ✖   14:9   today is never reassigned. Use const instead.                                                                prefer-const
  ✖   15:14  Strings must use singlequote.                                                                                quotes
  ✖   15:14  Unexpected string concatenation.                                                                             prefer-template
  ✖   16:8   Strings must use singlequote.                                                                                quotes
  ✖   16:8   Unexpected string concatenation.                                                                             prefer-template
  ✖   16:31  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   20:19  callback is defined but never used.                                                                          no-unused-vars
  ✖   21:25  Unexpected string concatenation.                                                                             prefer-template
  ✖   21:28  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   21:29  Strings must use singlequote.                                                                                quotes
  ✖   21:40  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   23:7   res is not defined.                                                                                          no-undef
  ✖   24:7   Missing semicolon.                                                                                           semi
  ✖   28:9   key is never reassigned. Use const instead.                                                                  prefer-const
  ✖   29:28  Unexpected string concatenation.                                                                             prefer-template
  ✖   29:31  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   29:43  Missing space before opening brace.                                                                          space-before-blocks
  ✖   31:15  Unexpected string concatenation.                                                                             prefer-template
  ✖   31:18  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   32:18  Unexpected string concatenation.                                                                             prefer-template
  ✖   32:21  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   32:22  Strings must use singlequote.                                                                                quotes
  ✖   33:15  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   33:23  Missing space before function parentheses.                                                                   space-before-function-paren
  ✖   34:15  previousClimbs is never reassigned. Use const instead.                                                       prefer-const
  ✖   35:11  The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.  guard-for-in
  ✖   35:11  Using ForInStatement is not allowed.                                                                         no-restricted-syntax
  ✖   35:15  There should be no spaces inside this paren.                                                                 space-in-parens
  ✖   35:21  day is never reassigned. Use const instead.                                                                  prefer-const
  ✖   36:33  A space is required after `.                                                                                 object-curly-spacing
  ✖   36:34  Expected property shorthand.                                                                                 object-shorthand
  ✖   36:75  A space is required before ñ.                                                                                object-curly-spacing
  ✖   38:11  Assignment to property of function parameter resp.                                                           no-param-reassign
  ✖   42:21  Strings must use singlequote.                                                                                quotes
  ✖   47:9   key is never reassigned. Use const instead.                                                                  prefer-const
  ✖   48:9   result is assigned a value but never used.                                                                   no-unused-vars
  ✖   48:9   result is never reassigned. Use const instead.                                                               prefer-const
  ✖   48:41  A space is required after ,.                                                                                 comma-spacing
  ✖   53:5   Expected exception block, space or tab after // in comment.                                                  spaced-comment
  ✖   54:9   key is never reassigned. Use const instead.                                                                  prefer-const
  ✖   54:16  Multiple spaces found before date.                                                                           no-multi-spaces
  ✖   59:22  Unexpected string concatenation.                                                                             prefer-template
  ✖   59:25  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   64:18  Missing () invoking a constructor.                                                                           new-parens

  scripts/App.js:3:39
  ⚠   65:15  Missing function expression name.                                                                            func-names
  ⚠   76:9   Unexpected constant condition.                                                                               no-constant-condition
  ⚠   87:18  Missing function expression name.                                                                            func-names
  ⚠   91:25  Missing function expression name.                                                                            func-names
  ⚠  113:15  Missing function expression name.                                                                            func-names
  ⚠  162:40  Missing function expression name.                                                                            func-names
  ✖    3:39  A space is required before ñ.                                                                                object-curly-spacing
  ✖   12:18  amt is defined but never used.                                                                               no-unused-vars
  ✖   13:16  onChange is missing in props validation                                                                      react/prop-types
  ✖   13:36  num is missing in props validation                                                                           react/prop-types
  ✖   16:18  amt is defined but never used.                                                                               no-unused-vars
  ✖   17:16  onChange is missing in props validation                                                                      react/prop-types
  ✖   17:36  num is missing in props validation                                                                           react/prop-types
  ✖   20:9   Unexpected space before function parentheses.                                                                space-before-function-paren
  ✖   22:8   Expected indentation of 6 space characters but found 7.                                                      react/jsx-indent
  ✖   23:29  num is missing in props validation                                                                           react/prop-types
  ✖   24:29  count is missing in props validation                                                                         react/prop-types
  ✖   28:6   Expected indentation of 4 spaces but found 5.                                                                indent
  ✖   28:7   Missing semicolon.                                                                                           semi
  ✖   32:16  Declare only one React component per file                                                                    react/no-multi-comp
  ✖   37:14  Missing space before value for key counts.                                                                   key-spacing
  ✖   38:11  Missing space before value for key sum.                                                                      key-spacing
  ✖   39:16  Missing space before value for key topGrade.                                                                 key-spacing
  ✖   40:11  Missing space before value for key uid.                                                                      key-spacing
  ✖   42:16  Missing space before value for key previous.                                                                 key-spacing
  ✖   43:25  Missing space before value for key formattedPrevious.                                                        key-spacing
  ✖   50:3   sumCounts should be placed after componentDidMount                                                           react/sort-comp
  ✖   50:12  Expected this to be used by class method sumCounts.                                                          class-methods-use-this
  ✖   52:5   The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.  guard-for-in
  ✖   52:5   Using ForInStatement is not allowed.                                                                         no-restricted-syntax
  ✖   52:14  grade is never reassigned. Use const instead.                                                                prefer-const
  ✖   59:5   Unexpected var, use let or const instead.                                                                    no-var
  ✖   60:9   url is never reassigned. Use const instead.                                                                  prefer-const
  ✖   60:15  Unexpected string concatenation.                                                                             prefer-template
  ✖   60:29  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   62:7   Expected property shorthand.                                                                                 object-shorthand
  ✖   62:11  Missing space before value for key url.                                                                      key-spacing
  ✖   64:13  Strings must use singlequote.                                                                                quotes
  ✖   65:7   Expected method shorthand.                                                                                   object-shorthand
  ✖   65:15  Missing space before value for key success.                                                                  key-spacing
  ✖   66:13  state is never reassigned. Use const instead.                                                                prefer-const
  ✖   69:12  Multiple spaces found before else.                                                                           no-multi-spaces
  ✖   70:23  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   71:21  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   71:50  Unary operator ++ used.                                                                                      no-plusplus
  ✖   76:9   Expected space(s) after "if".                                                                                keyword-spacing
  ✖   85:22  Unexpected space before function parentheses.                                                                space-before-function-paren
  ✖   85:23  Expected this to be used by class method formatPreviousGraph.                                                class-methods-use-this
  ✖   86:9   data is never reassigned. Use const instead.                                                                 prefer-const
  ✖   87:18  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   87:18  Expected to return a value in this function.                                                                 array-callback-return
  ✖   87:26  Missing space before function parentheses.                                                                   space-before-function-paren
  ✖   89:7   Unexpected var, use let or const instead.                                                                    no-var
  ✖   89:20  There should be no space after ¡.                                                                            array-bracket-spacing
  ✖   89:22  Strings must use singlequote.                                                                                quotes
  ✖   89:29  Strings must use singlequote.                                                                                quotes
  ✖   89:36  Strings must use singlequote.                                                                                quotes
  ✖   89:43  Strings must use singlequote.                                                                                quotes
  ✖   89:50  Strings must use singlequote.                                                                                quotes
  ✖   89:57  Strings must use singlequote.                                                                                quotes
  ✖   90:9   Strings must use singlequote.                                                                                quotes
  ✖   90:16  Strings must use singlequote.                                                                                quotes
  ✖   90:23  Strings must use singlequote.                                                                                quotes
  ✖   90:31  Strings must use singlequote.                                                                                quotes
  ✖   90:38  Strings must use singlequote.                                                                                quotes
  ✖   90:45  Strings must use singlequote.                                                                                quotes
  ✖   90:51  There should be no space before ¿.                                                                           array-bracket-spacing
  ✖   91:25  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖   91:33  There should be no spaces inside this paren.                                                                 space-in-parens
  ✖   91:33  Missing space before function parentheses.                                                                   space-before-function-paren
  ✖   91:44  Missing space before opening brace.                                                                          space-before-blocks
  ✖   92:30  A space is required after ,.                                                                                 comma-spacing
  ✖   95:11  date is never reassigned. Use const instead.                                                                 prefer-const
  ✖   96:11  month is never reassigned. Use const instead.                                                                prefer-const
  ✖   97:21  A space is required after `.                                                                                 object-curly-spacing
  ✖   97:28  Unexpected string concatenation.                                                                             prefer-template
  ✖   97:32  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   97:36  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   97:49  Infix operators must be spaced.                                                                              space-infix-ops
  ✖   97:54  Expected property shorthand.                                                                                 object-shorthand
  ✖   97:58  Missing space before value for key sum.                                                                      key-spacing
  ✖   97:61  A space is required before ñ.                                                                                object-curly-spacing
  ✖   99:16  Missing semicolon.                                                                                           semi
  ✖  103:5   Unexpected var, use let or const instead.                                                                    no-var
  ✖  104:15  Unexpected string concatenation.                                                                             prefer-template
  ✖  104:29  Infix operators must be spaced.                                                                              space-infix-ops
  ✖  106:14  Unexpected string concatenation.                                                                             prefer-template
  ✖  109:7   Expected property shorthand.                                                                                 object-shorthand
  ✖  109:11  Missing space before value for key url.                                                                      key-spacing
  ✖  111:13  Strings must use singlequote.                                                                                quotes
  ✖  112:28  A space is required after `.                                                                                 object-curly-spacing
  ✖  112:29  Extra space after key grades.                                                                                key-spacing
  ✖  112:55  A space is required before ñ.                                                                                object-curly-spacing
  ✖  113:7   Expected method shorthand.                                                                                   object-shorthand
  ✖  113:15  Missing space before value for key success.                                                                  key-spacing
  ✖  114:13  previous is never reassigned. Use const instead.                                                             prefer-const
  ✖  118:21  Unexpected string concatenation.                                                                             prefer-template
  ✖  118:21  Strings must use singlequote.                                                                                quotes
  ✖  119:14  Strings must use singlequote.                                                                                quotes
  ✖  119:14  Unexpected string concatenation.                                                                             prefer-template
  ✖  123:24  Expected === and instead saw ==.                                                                             eqeqeq
  ✖  125:57  Missing whitespace after semicolon.                                                                          semi-spacing
  ✖  125:58  Unary operator ++ used.                                                                                      no-plusplus
  ✖  126:13  Expected space(s) after "if".                                                                                keyword-spacing
  ✖  133:27  A space is required after `.                                                                                 object-curly-spacing
  ✖  133:28  Unnecessarily quoted property day found.                                                                     quote-props
  ✖  133:34  Missing space before value for key day.                                                                      key-spacing
  ✖  133:66  A space is required before ñ.                                                                                object-curly-spacing
  ✖  136:26  Strings must use singlequote.                                                                                quotes
  ✖  139:13  formattedPrevious is never reassigned. Use const instead.                                                    prefer-const
  ✖  140:23  A space is required after `.                                                                                 object-curly-spacing
  ✖  140:51  A space is required before ñ.                                                                                object-curly-spacing
  ✖  146:19  A space is required after `.                                                                                 object-curly-spacing
  ✖  146:20  Unnecessarily quoted property error found.                                                                   quote-props
  ✖  146:28  Missing space before value for key error.                                                                    key-spacing
  ✖  146:31  A space is required before ñ.                                                                                object-curly-spacing
  ✖  150:19  A space is required after `.                                                                                 object-curly-spacing
  ✖  150:26  Missing space before value for key today.                                                                    key-spacing
  ✖  150:44  A space is required before ñ.                                                                                object-curly-spacing
  ✖  154:9   counts is never reassigned. Use const instead.                                                               prefer-const
  ✖  156:19  A space is required after `.                                                                                 object-curly-spacing
  ✖  156:20  Expected property shorthand.                                                                                 object-shorthand
  ✖  156:27  Missing space before value for key counts.                                                                   key-spacing
  ✖  156:33  A space is required before ñ.                                                                                object-curly-spacing
  ✖  160:5   Unexpected var, use let or const instead.                                                                    no-var
  ✖  162:9   grades is never reassigned. Use const instead.                                                               prefer-const
  ✖  162:40  Unexpected function expression.                                                                              prefer-arrow-callback
  ✖  162:48  Missing space before function parentheses.                                                                   space-before-function-paren
  ✖  162:62  Missing space before opening brace.                                                                          space-before-blocks
  ✖  163:26  Unexpected string concatenation.                                                                             prefer-template
  ✖  163:31  Infix operators must be spaced.                                                                              space-infix-ops
  ✖  163:32  Strings must use singlequote.                                                                                quotes
  ✖  163:46  There should be no space after `                                                                             react/jsx-curly-spacing
  ✖  163:54  There should be no space before ñ                                                                            react/jsx-curly-spacing
  ✖  163:97  A space is required before closing bracket                                                                   react/jsx-space-before-closing
  ✖  165:9   sum is never reassigned. Use const instead.                                                                  prefer-const
  ✖  176:79  A space is required before closing bracket                                                                   react/jsx-space-before-closing
  ✖  182:22  Unexpected usage of singlequote.                                                                             jsx-quotes
  ✖  182:41  Unexpected usage of singlequote.                                                                             jsx-quotes
  ✖  182:54  Unexpected usage of singlequote.                                                                             jsx-quotes

  20 warnings
  231 errors
