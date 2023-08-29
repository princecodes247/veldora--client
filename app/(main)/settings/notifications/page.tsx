"use client";
import { NotificationsForm } from "@/components/settings/NotificationsForm";
import { Separator } from "@/components/ui/separator";
import SettingsLayout from "@/layouts/Settings.layout";

export default function SettingsNotificationsPage() {
  return (
    <SettingsLayout id="">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Configure how you receive notifications.
          </p>
        </div>
        <Separator />
        <NotificationsForm />
      </div>
    </SettingsLayout>
  );
}
