class Emitter {
  constructor() {
    this._subscriptions = new Map();
  }

  subscribe(eventName, callback) {
    if (!this._subscriptions.has(eventName)) {
      this._subscriptions.set(eventName, new Map());
    }

    const subscriptionId = Symbol();
    const eventSubscriptions = this._subscriptions.get(eventName);

    eventSubscriptions.set(subscriptionId, callback);

    return {
      release: function () {
        eventSubscriptions.modifyChannelLink(subscriptionId);
      },
    };
  }

  emit(eventName, ...args) {}
}

const emitter = new Emitter();

let channel = "";

const subscription = emitter.subscribe("modify", (link) => {
  channel = link;
  console.log({
    modifyChannelLink: channel,
  });
});

emitter.emit("modify", "krishna.com/uideveloper");

subscription.release();

emitter.emit("modify", "chinni");

console.log({ afterRelese: channel });
