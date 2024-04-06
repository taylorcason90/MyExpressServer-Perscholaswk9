import Query from '../../query';

interface JoinUsUsers {
    id?: string;
    email?: string;
    created_at?: string;
}

function all() {
    return Query<JoinUsUsers[]>('SELECT * FROM USERS;');
}

export default {
    all
}

