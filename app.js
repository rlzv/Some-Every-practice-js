const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

//75

// exams.every(score => score >= 75)
// exams.every(score => score >= 70)//daca una e falsa returneaza false

exams.some(score => score >= 75)




const movies = [
    {
        title: 'Amari',
        score: 39,
        year: 1984
    },
    {
        title: 'Stand With U',
        score: 85,
        year: 2013
    },
    {
        title: 'Warzone',
        score: 25,
        year: 2004
    },
    {
        title: 'Blinders',
        score: 70,
        year: 2017
    }
]

movies.some(movie => movie.year > 2015)
