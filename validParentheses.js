const isValidParentheses = (inputString) => {
  const stack = [];
  const parantheses = "() {} []";
  let i = 0;

  while (i < inputString.length) {
    stack.push(inputString[i]);
    i++;
    console.log("stack", stack);
    let open = stack[stack.length - 2];
    //console.log("open", open);

    let closed = stack[stack.length - 1];
    // console.log("closed", closed);

    let potentialParens = open + closed;

    if (parantheses.includes(potentialParens)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(isValidParentheses("()"));

console.log(isValidParentheses("{[]}"));

console.log(isValidParentheses("{[)}"));

console.log(isValidParentheses("{[}]"));