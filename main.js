
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Daniela", nota: 4 },
    { nome: "Eduardo", nota: 6 }
];

const filtrarAprovados = (listaAlunos) => listaAlunos.filter(aluno => aluno.nota >= 6);

console.log(filtrarAprovados(alunos));
