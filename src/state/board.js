export const BOARD_NEW_BOARD = 'BOARD/NEW_BOARD';
export const BOARD_NEW_NOTE = 'BOARD/NEW_NOTE';


export class Note {
    constructor(title = 'New Note', pages = [], tags = [], created = Date.now()) {
        this.title = title;
        this.pages = [...pages];
        this.tags = tags;
        this.created = created;
    }

    addTag(tag) {
        this.tags = [...this.tags, tag];
    }
}

export class Board {
    constructor(title = 'Board', tags = [], notes = [], created = Date.now()) {
        this.title = title;
        this.tags = tags;
        this.created = created;
        this.notes = notes;
    }
}

export const initialState = {
    boards: {
        farts: new Board('farts'),
    },
};

export default (state, { type, payload }) => {
    switch (type) {
    case BOARD_NEW_BOARD:
        return {
            ...state,
            boards: {
                [payload.board]: new Board(payload.board, payload.tags),
            },
        };
    case BOARD_NEW_NOTE:
        return {
            ...state,
            boards: {
                ...state.boards,
                [payload.board]: {
                    ...state.boards[payload.board],
                    notes: [
                        ...state.boards[payload.board].notes,
                        new Note(payload.title, payload.pages, payload.tags),
                    ],
                },
            },
        };
    default:
        return state;
    }
};

const selector = state => state.board;
export const getBoard = (state, board) => selector(state).boards[board];

const newNote = ({
    board, title, pages, tags,
}) => ({
    type: BOARD_NEW_NOTE,
    payload: {
        board, title, pages, tags,
    },
});


export const actions = { newNote };
