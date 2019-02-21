```js 
 {  
  entities: {  
    pins: {  
      1: {  
        id: 1,  
        linkUrl: ,  
        author_id: 17  
      },  
      2: {  
        id: 2,  
        linkUrl: ,  
        author_id: 23  
      },  
      3: {  
        id: 3,  
        linkUrl: ,  
        author_id: 5  
      }  
    },  
    boards: {  
      1: {  
        id: 1,  
        title: 'Kittens',  
        authorId: 23,  
        pinIds: [2, 3]
      },  
      2: {  
        id: 2,  
        title: 'Bunnies',  
        authorId: 5,  
        pinIds: [3]
      },  
      3: {  
        id: 3,  
        linkId: 'Puppers',  
        authorId: 17,  
        pinIds: [1]
      }  
    },  
    pinnedBoards: {  
      1: {  
        id: 1,  
        pinId: 1,
        boardId: 3
      },  
      2: {  
        id: 2,  
        pinId: 2 ,
        boardId: 1
      },  
      3: {  
        id: 3,  
        pinId: 3 ,
        boardId: 1
      }  
      4: {  
        id: 4,  
        pinId: 3 ,
        boardId: 2
      }  
    },  
    users: {  
      17: {  
        id: 17,  
        username: 'Serena van der Woodsen',  
        authoredPinIds: [1], 
        authoredBoardIds: [],
      },  
      23: {  
        id: 23,  
        username: 'Dan Humphrey',  
        authoredPinIds: [2], 
        authoredBoardIds: [],
      },  
      5: {  
        id: 5,  
        username: 'Blair Waldorf',  
        authoredPinIds: [3], 
        authoredBoardIds: [],
      }  
     },  
     follows: 
        1: {
          id: 1 ,  
          followedId: 5,  
          followerId: 23  
        }
     }
 },  
 
 ui: {  
   loading: true/false  
 },  
 errors: {  
   login: ["Invalid credentials"]  
 },  
 session: {
   currentUserId: 23  
 }

}
```
