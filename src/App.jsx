import { useState } from 'react'
import './App.css'

const confirmationMessages = [
  'Are you sure?',
  'Are you REALLY sure?',
  'Do you have evidence that you deserve this?',
  'Your mom would be disappointed.',
  'Your task has requested legal representation.',
  'This has been reported to the UN.',
  'Are you absolutely certain you want to become productive?',
  'Interesting. You think you can just finish things now?',
  'We consulted three economists. They advised against it.',
  'Your ancestors are watching.',
  'This decision cannot be emotionally undone.',
  'Have you considered simply not doing it?',
  'The productivity department has denied your request.',
  'We are contacting your academic advisor.',
  'Fine. But we’re watching you.',
  'ERROR: Excessive productivity detected.',
  'You have made a terrible mistake.',
  'Why are you still trying?',
  'This is getting embarrassing for both of us.',
  'Please reconsider your entire life.',
]

const buttonMessages = [
  'Yes, unfortunately',
  'I am sure',
  'Keep going',
  'Still yes',
  'I regret nothing',
  'Proceed, I guess',
  'Do it anyway',
  'I insist',
  'Continue making this worse',
  'Yes. Again.',
]

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')
  const [confirmStep, setConfirmStep] = useState(null)
  const [shakeKey, setShakeKey] = useState(0)

  function addTask(event) {
    event.preventDefault()

    const trimmed = input.trim()

    if (!trimmed) {
      return
    }

    const newTask = {
      id: Date.now(),
      text: trimmed,
      createdAt: Date.now(),
      completed: false,
    }

    setTasks((currentTasks) => [newTask, ...currentTasks])
    setInput('')
  }

  function startCompletion(taskId) {
    setConfirmStep({
      taskId,
      step: 0,
    })

    setShakeKey((current) => current + 1)
  }

  function handleConfirmation() {
    if (!confirmStep) {
      return
    }

    setConfirmStep((current) => ({
      ...current,
      step: current.step + 1,
    }))

    setShakeKey((current) => current + 1)
  }

  function cancelConfirmation() {
    setConfirmStep(null)
  }

  const activeTasks = tasks.filter((task) => !task.completed)
  const completedTasks = tasks.filter((task) => task.completed)

  const currentMessage =
    confirmStep &&
    confirmationMessages[confirmStep.step % confirmationMessages.length]

  const currentButton =
    confirmStep &&
    buttonMessages[confirmStep.step % buttonMessages.length]

  return (
    <>
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            ☹
          </span>

          <span className="brand-text">ProcrastiNation</span>
        </div>

        <div className="tagline">
          the to-do app that genuinely does not care
        </div>
      </header>

      <main className="app-shell">
        <section className="app-intro">
          <p className="eyebrow">PRODUCTIVITY, BUT WORSE</p>

          <h1 className="app-title">
            Things you should do,
            <br />
            eventually.
          </h1>

          <p className="app-description">
            Add a task. Ignore it. Watch it slowly become a problem.
          </p>
        </section>

        <section className="task-panel">
          <form className="task-form" onSubmit={addTask}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Something you’ll definitely do later..."
              aria-label="New task"
            />

            <button type="submit">
              Add task
            </button>
          </form>

          <div className="task-header">
            <div>
              <span className="task-count">{activeTasks.length}</span>

              <span className="task-count-label">
                {activeTasks.length === 1
                  ? 'task waiting'
                  : 'tasks waiting'}
              </span>
            </div>

            <span className="task-warning">
              They are judging you.
            </span>
          </div>

          <div className="task-list">
            {activeTasks.length === 0 && completedTasks.length === 0 && (
              <div className="empty-state">
                <div className="empty-face" aria-hidden="true">
                  😐
                </div>

                <p>No tasks yet.</p>

                <span>
                  This is currently your most productive moment.
                </span>
              </div>
            )}

            {activeTasks.map((task) => (
              <article className="task-item" key={task.id}>
                <div className="task-copy">
                  <span className="task-bullet" aria-hidden="true">
                    ○
                  </span>

                  <span className="task-text">
                    {task.text}
                  </span>
                </div>

                <button
                  type="button"
                  className="complete-button"
                  onClick={() => startCompletion(task.id)}
                >
                  Done
                </button>
              </article>
            ))}

            {completedTasks.length > 0 && (
              <div className="completed-section">
                <div className="completed-heading">
                  Completed against your better judgment
                </div>

                {completedTasks.map((task) => (
                  <article
                    className="task-item task-item-completed"
                    key={task.id}
                  >
                    <div className="task-copy">
                      <span className="task-bullet" aria-hidden="true">
                        ✓
                      </span>

                      <span className="task-text">
                        {task.text}
                      </span>
                    </div>

                    <span className="completed-label">
                      regrettably done
                    </span>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="useless-note">
          <span aria-hidden="true">⚠</span>
          Completing tasks is currently considered suspicious behavior.
        </section>
      </main>

      {confirmStep && (
        <div className="modal-backdrop">
          <div
            key={shakeKey}
            className="confirmation-modal shake"
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirmation-title"
          >
            <div className="modal-stamp">
              PRODUCTIVITY DETECTED
            </div>

            <div className="modal-attempt">
              ATTEMPT #{confirmStep.step + 1}
            </div>

            <h2 id="confirmation-title">
              {currentMessage}
            </h2>

            <p>
              You are attempting to finish something.
              <br />
              This behavior is becoming concerning.
            </p>

            <div className="modal-progress">
              There is no final confirmation.
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="modal-cancel"
                onClick={cancelConfirmation}
              >
                Fine. I’ll procrastinate.
              </button>

              <button
                type="button"
                className="modal-confirm"
                onClick={handleConfirmation}
              >
                {currentButton}
              </button>
            </div>

            <div className="modal-footnote">
              Hint: this never ends.
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App