function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const collectiveWisdom = {
    patronSaints: ['Saint Michael', 'Saint Mary', 'Saint Joseph', 'Saint Francis', 'Saint Anthony', 'Saint Therese', 'Saint Patrick', 'Saint Jude', 'Saint Catherine', 'Saint Peter', 'Saint Paul', 'Saint John', 'Saint Teresa', 'Saint Anne', 'Saint Nicholas', 'Saint Sebastian'],
    missingValue: [
        "Integrity: Being honest, ethical, and maintaining strong moral principles.",
        "Respect: Treating others with courtesy, dignity, and consideration.",
        "Responsibility: Taking ownership of one's actions and being accountable.",
        "Compassion: Showing empathy, kindness, and concern for others' well-being.",
        "Honesty: Being truthful, sincere, and transparent in words and actions.",
        "Fairness: Acting in an impartial and just manner, treating others equitably.",
        "Trustworthiness: Being reliable, dependable, and deserving of trust.",
        "Gratitude: Expressing appreciation and thankfulness for what one has.",
        "Courage: Facing challenges, adversity, and fears with bravery and determination.",
        "Perseverance: Persisting and staying committed in the face of obstacles.",
        "Humility: Having a modest and humble attitude, acknowledging one's limitations.",
        "Generosity: Being willing to share and give without expecting anything in return.",
        "Empathy: Understanding and sharing the feelings of others, showing compassion.",
        "Tolerance: Accepting and respecting diverse opinions, beliefs, and cultures.",
        "Cooperation: Working collaboratively with others towards a common goal.",
        "Forgiveness: Letting go of resentments and granting pardon to others.",
        "Patience: Demonstrating calmness and tolerance in difficult situations.",
        "Graciousness: Showing elegance, poise, and good manners in interactions.",
        "Self-discipline: Exercising self-control and restraining impulsive behavior.",
        "Appreciation of beauty: Recognizing and finding joy in the world's aesthetic qualities."
      ],
    advice: [
        "`Do small things with great love.` - Mother Teresa",
        "`Be who God meant you to be and you will set the world on fire.` - St. Catherine of Siena",
        "`Pray, hope, and don't worry.` - St. Padre Pio",
        "`Let nothing disturb you, let nothing frighten you, all things pass away. God never changes.` - St. Teresa of Avila",
        "`In all things, it is better to hope than to despair.` - St. Thomas Aquinas",
        "`The measure of love is to love without measure.` - St. Augustine",
        "`Preach the Gospel at all times. If necessary, use words.` - St. Francis of Assisi",
        "`The purpose of our lives is to be happy in God.` - St. Thomas Aquinas",
        "`Do ordinary things with extraordinary love.` - St. Therese of Lisieux",
        "`God doesn't require us to succeed; He only requires that you try.` - St. Mother Teresa",
        "`Pray as though everything depended on God. Work as though everything depended on you.` - St. Augustine",
        "`The greatest honor we can give Almighty God is to live gladly because of the knowledge of his love.` - St. Julian of Norwich",
        "`The future starts today, not tomorrow.` - St. John Paul II",
        "`Be the kind of person you want to meet.` - St. Catherine of Siena",
        "`You will find something more in woods than in books. Trees and stones will teach you that which you can never learn from masters.` - St. Bernard of Clairvaux",
        "`We are all pencils in the hand of God.` - St. Teresa of Calcutta",
        "`Be generous with your time and your resources, and always be ready to help others.` - St. Vincent de Paul",
        "`Let us not be satisfied with just giving money. Money is not enough, money can be got, but they need your hearts to love them.` - St. Teresa of Calcutta",
        "`Start by doing what is necessary; then do what is possible; and suddenly you are doing the impossible.` - St. Francis of Assisi",
        "`Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart.` - St. Mother Teresa",
        "`It is not how much we do, but how much love we put in the doing. It is not how much we give, but how much love we put in the giving.` - St. Mother Teresa",
        "`Don't wait for leaders; do it alone, person to person.` - St. Mother Teresa",
        "`Do not be afraid. Do not be satisfied with mediocrity. Put out into the deep and let down your nets for a catch.` - St. John Paul II",
        "`When you approach the tabernacle, remember that he has been waiting for you for twenty centuries.` - St. Josemaria Escriva",
        "`Spread love everywhere you go. Let no one ever come to you without leaving happier.` - St. Mother Teresa",
        "`God has created me to do Him some definite service. He has committed some work to me which He has not committed to another.` - St. John Henry Newman",
        "`Love is shown more in deeds than in words.` - St. Ignatius of Loyola",
        // Add more quotes here...
      ]
  }

  function generateWisdom() {
    const personalWisdom = [];
  
    for (let prop in collectiveWisdom) {
      let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);
  
      switch (prop) {
        case 'patronSaints':
          personalWisdom.push(`The Saint Watching You Now Is "${collectiveWisdom[prop][optionIdx]}".`);
          break;
        case 'missingValue':
          personalWisdom.push(`You are missing: "${collectiveWisdom[prop][optionIdx]}".`);
          break;
        case 'advice':
          personalWisdom.push(collectiveWisdom[prop][optionIdx]);
          break;
        default:
          personalWisdom.push('There is not enough info.');
      }
    }
  
    const wisdomOutput = document.getElementById("wisdomOutput");
    wisdomOutput.textContent = personalWisdom.join('\n');

    console.log(personalWisdom);
  }
  