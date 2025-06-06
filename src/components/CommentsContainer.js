import React from 'react'
const commentsData = [
    {
        name: "Thamitha",
        text: "Lorem ipsum dolor sir amet, consectetur adip",
        replies: []
    },
    {
        name: "Thamitha",
        text: "Lorem ipsum dolor sir amet, consectetur adip",
        replies: [
            {
                name: "Thamitha",
                text: "Lorem ipsum dolor sir amet, consectetur adip",
                replies: [
                    {
                        name: "Thamitha",
                        text: "Lorem ipsum dolor sir amet, consectetur adip",
                        replies: []
                    },
                    {
                        name: "Thamitha",
                        text: "Lorem ipsum dolor sir amet, consectetur adip",
                        replies: []
                    },
                    {
                        name: "Thamitha",
                        text: "Lorem ipsum dolor sir amet, consectetur adip",
                        replies: []
                    },
                    {
                        name: "Thamitha",
                        text: "Lorem ipsum dolor sir amet, consectetur adip",
                        replies: []
                    },
                    {
                        name: "Thamitha",
                        text: "Lorem ipsum dolor sir amet, consectetur adip",
                        replies: []
                    }
                ]
            },
            {
                name: "Thamitha",
                text: "Lorem ipsum dolor sir amet, consectetur adip",
                replies: []
            },
            {
                name: "Thamitha",
                text: "Lorem ipsum dolor sir amet, consectetur adip",
                replies: []
            },
            {
                name: "Thamitha",
                text: "Lorem ipsum dolor sir amet, consectetur adip",
                replies: []
            }
        ]
    },
    {
        name: "Thamitha",
        text: "Lorem ipsum dolor sir amet, consectetur adip",
        replies: []
    },
    {
        name: "Thamitha",
        text: "Lorem ipsum dolor sir amet, consectetur adip",
        replies: []
    },
    {
        name: "Thamitha",
        text: "Lorem ipsum dolor sir amet, consectetur adip",
        replies: []
    },
    {
        name: "Thamitha",
        text: "Lorem ipsum dolor sir amet, consectetur adip",
        replies: []
    },
    {
        name: "Thamitha",
        text: "Lorem ipsum dolor sir amet, consectetur adip",
        replies: []
    }
]

const Comment = ({data}) => {
    const {name, text, replies} = data
    return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img className="w-12 h-12"
         alt="user"
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoB4l1vBNqbEpwil6Jsrpr6gE8wLY5_23geyqPK0QyhVo9x24z31MDvpC1WvDF3Gp8h6o&usqp=CAU'
        />
        <div className="px-3">
            <p className="font-bold">{name}</p>
             <p>{text}</p>
        </div>
    </div>
    )
}

const CommentsList = ({comments}) => {
    return comments.map((comment, index)=> (
        <div>
            <Comment key={index} data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies}/>
        </div>
    </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer