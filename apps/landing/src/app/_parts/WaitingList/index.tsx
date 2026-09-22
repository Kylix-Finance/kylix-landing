"use client";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { createContact } from "~/api/contact";
import Button from "~/components/Button";
import { waitingListSectionId } from "~/data/ids";
import { isEmailAddress } from "~/utils";

function messageFor(code: string): string {
  switch (code) {
    case "invalid_email":
      return "Enter a valid email address.";
    case "already_registered":
      return "That email is already on the list. You are all set.";
    case "rate_limited":
      return "Too many attempts. Wait a minute and try again.";
    case "unavailable":
      return "Sign-up is temporarily unavailable. Please try again later.";
    default:
      return "We couldn't add you. Please try again in a minute.";
  }
}
export default function WaitingList() {
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError("");
    setIsSuccess(false);
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isPending) return;
    const nextEmail = email.trim();
    if (!isEmailAddress(nextEmail)) {
      setError(messageFor("invalid_email"));
      setIsSuccess(false);
      emailRef.current?.focus();
      return;
    }
    setIsPending(true);
    setError("");
    setIsSuccess(false);
    try {
      await createContact(nextEmail);
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError(messageFor(err instanceof Error ? err.message : "failed"));
    } finally {
      setIsPending(false);
    }
  };
  return (
    <section
      id={waitingListSectionId}
      className="site-container waitlist-section"
      aria-labelledby="waitlist-heading"
    >
      <div className="waitlist-panel">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> Stay in the loop
          </p>
          <h2 id="waitlist-heading">
            Be there for
            <br />
            <span className="text-primary-400">what comes next.</span>
          </h2>
          <p className="section-description">
            Get testnet and mainnet announcements, plus occasional notes from
            the team.
          </p>
        </div>
        <form
          className="waitlist-form"
          onSubmit={onSubmit}
          noValidate
          aria-busy={isPending}
        >
          <label htmlFor="list-email">Your email address</label>
          <div className="waitlist-fields">
            <input
              ref={emailRef}
              id="list-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              required
              maxLength={254}
              value={email}
              disabled={isPending}
              onChange={onChangeHandler}
              placeholder="you@example.com"
              aria-invalid={error === messageFor("invalid_email")}
              aria-describedby={error ? "list-note list-error" : "list-note"}
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Joining…" : "Notify me"}
              <span aria-hidden="true">↗</span>
            </Button>
          </div>
          {error && (
            <p
              id="list-error"
              role="alert"
              className="waitlist-feedback text-red-300"
            >
              {error}
            </p>
          )}
          <div role="status" aria-live="polite">
            {isSuccess && (
              <p className="waitlist-feedback text-primary-300">
                You are on the list. We will email you when there is news.
              </p>
            )}
          </div>
          <p id="list-note" className="waitlist-note">
            No wallet needed. Read our <a href="/privacy">privacy note</a> for
            how we use your address and how to leave the list.
          </p>
        </form>
      </div>
    </section>
  );
}
