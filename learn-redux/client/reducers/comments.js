/*jshint esversion: 6 */
function postComments(state = [], action){
  switch (action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      // ...state takes EVERY item from existing state
      // and applies it to this new array
      // {} adds new comment to array w/o changing orgignal state
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      console.log('Removing a comment');
      // we need to return the new state without the deleted comment
      return [
        // copy the beg up and till the comment
        ...state.slice(0, action.i),
        // after the deleted one to the end, effectively removing i
        // by not copying it over to new state
        // ex. remove "cool"
        // ["wow", "neat", "cool", "nice!"];
        // new state
        // ["wow", "neat", "nice" ];
        ...state.slice(action.i + 1),
      ]
    default:
      return state;

  }
  return state;
}


// handle entire comment state
function comments(state = [], action){
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      // pass postComments a sub piece of state and action to be performed
      // an array of comments
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
