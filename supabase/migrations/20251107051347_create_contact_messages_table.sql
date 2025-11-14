/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `subject` (text)
      - `message` (text)
      - `status` (text, default: 'new')
      - `created_at` (timestamp)
      - `read_at` (timestamp, optional)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for inserting new messages (public)
    - Add policy for viewing own messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at timestamptz DEFAULT now(),
  read_at timestamptz,
  replied_at timestamptz
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read their own messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt()->>'email' OR auth.jwt()->>'role' = 'admin');
