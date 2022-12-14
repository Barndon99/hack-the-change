import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export async function seedUsers(): Promise<void> {
  const teacher = await prisma.user.create({data: 
    {
      email: 'newteacher6@gmail.com',
      name: 'Greg',
      password: 'password',
      role: 'TEACHER'
    }
  });

  const user1 = await prisma.user.create({data: 
    {
      email: 'student6@gmail.com',
      name: 'Richard',
      password: 'password',
      role: 'STUDENT'
    }
  });

  const user2 = await prisma.user.create({data: 
    {
      email: 'student7@gmail.com',
      name: 'Billy',
      password: 'password',
      role: 'STUDENT'
    }
  });

  const newCourse = await prisma.course.create({
    data: {
        name: 'ECON',
        code: 'ECON1017',
        userId: teacher.id,
        description: 'Intro to Economics'
    }
  });

  const newCourse2 = await prisma.course.create({
    data: {
        name: 'COMPSCI',
        code: 'COMPSCI1017',
        userId: teacher.id,
        description: 'Intro to Computer Science'
    }
  });

  const student1 = await prisma.student.create({
    data: {
      userId: user1.id,
      courseId: newCourse.id
    }
  })

  const student2 = await prisma.student.create({
    data: {
      userId: user1.id,
      courseId: newCourse2.id
    }
  })

  const newPoll1 = await prisma.poll.create({
      data: {         
          question: 'What is the best programming language?',
          courseId: newCourse2.id,
      }
  });

  const newPoll2 = await prisma.poll.create({
    data: {         
        question: 'What is the worst programming language?',
        courseId: newCourse2.id,
    }
  });

  const newPoll3 = await prisma.poll.create({
    data: {         
        question: 'What is the best socio-economic system?',
        courseId: newCourse.id,
    }
  });

const newPoll4 = await prisma.poll.create({
    data: {         
        question: 'What is the best econ system?',
        courseId: newCourse.id,
    }
  });

  const newResponse = await prisma.pollResponse.create({
    data: {
        response: 'Capitalism is the best because it makes me feel safe, and I can buy things.',
        pollId: newPoll4.id,
        userId: user1.id,
        feeling: 'safe',
        sentiment: 'positive',
        method: 'buying',
        reason: 'I can buy'
    }
});

const newResponse1 = await prisma.pollResponse.create({
  data: {
      response: 'Capitalism is the best because it makes me feel safe, and I can buy things.',
      pollId: newPoll4.id,
      userId: user2.id,
      feeling: 'safe',
      sentiment: 'positive',
      method: 'buying',
      reason: 'I can buy'
  }
});

const newResponse2 = await prisma.pollResponse.create({
  data: {
      response: 'Oiligarchies are the best because it makes they feel rich, and I can buy assert influence.',
      pollId: newPoll4.id,
      userId: user2.id,
      feeling: 'safe',
      sentiment: 'positive',
      method: 'buying',
      reason: 'I can buy'
  }
});

const newResponse3 = await prisma.pollResponse.create({
  data: {
      response: 'Socialism is the best because it makes me feel community, and I love people.',
      pollId: newPoll4.id,
      userId: user1.id,
      feeling: 'safe',
      sentiment: 'positive',
      method: 'buying',
      reason: 'I can buy'
  }
});
}
